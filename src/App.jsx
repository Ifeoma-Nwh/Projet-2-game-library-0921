/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable no-else-return */
import React, { useEffect } from 'react';
import axios from 'axios';
import Cards from './components/Cards';
import AndroidFilter from './components/Filtres/AndroidFilter';
import AppleMacintoshFilter from './components/Filtres/AppleMacintoshFilter';
import IosFilter from './components/Filtres/IosFilter';
import LinuxFilter from './components/Filtres/LinuxFilter';
import NintendoFilter from './components/Filtres/NintendoFilter';
import PcFilter from './components/Filtres/PcFilter';
import PsFilter from './components/Filtres/PsFilter';
import XboxFilter from './components/Filtres/XboxFilter';
import AllFilter from './components/Filtres/AllFilter';

let page = 1;

export default function Main() {
  const [pages, setPage] = React.useState(1);
  const [pageChanges, setPageChanges] = React.useState(true); // true = suivant et false = precedent
  const [apiPages, setApiPages] = React.useState(
    `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1`
  );
  const [apiFilter, setApiFilter] = React.useState(
    `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1`
  );
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  useEffect(() => {
    if (pageChanges) {
      axios
        .get(apiFilter) // requête
        .then(
          (res) => {
            // permet de transmettre à items la réponse de l'API grâce à "setState"
            setIsLoaded(true);
            setItems(res.data.results);
            setApiPages(res.data);
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    } else {
      axios
        .get(apiFilter) // requête de la page
        .then(
          (res) => {
            // permet de transmettre à items la réponse de l'API grâce à "setState"
            setIsLoaded(true);
            setItems(res.data.results);
            setApiPages(res.data);
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, [pages, apiFilter]);

  if (error) {
    // si erreur on affiche laquel
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    // si ca charge on affiche "chargement..."
    return (
      <div style={{ textAlign: 'center' }}>Chargement de Games Library…</div>
    );
  } else {
    return (
      <div>
        {/* navbar */}
        <AllFilter setApiFilter={setApiFilter} />
        <XboxFilter setApiFilter={setApiFilter} />
        <IosFilter setApiFilter={setApiFilter} />
        <AndroidFilter setApiFilter={setApiFilter} />
        <NintendoFilter setApiFilter={setApiFilter} />
        <AppleMacintoshFilter setApiFilter={setApiFilter} />
        <LinuxFilter setApiFilter={setApiFilter} />
        <PcFilter setApiFilter={setApiFilter} />
        <PsFilter setApiFilter={setApiFilter} />
        {/* cards */}
        <ul className="grid-parent">
          {/* on va lire le tableau de la réponse parametre par parametre */}
          {items.map((item) => (
            <li
              key={item.id}
              style={{ listStyle: 'none' }}
              className="grid-enfant"
            >
              {/* A chaque lecture de parametre on crée une nouvelle carte en fonction du parametre(jeux) */}
              <Cards
                image={item.background_image}
                name={item.name}
                released={item.released}
                genres={item.genres}
                platformes={item.parent_platforms}
                id={item.id}
              />
            </li>
          ))}
          <a href="/#">
            <button
              onClick={() => {
                setPageChanges(true);
                setApiFilter(apiPages.next);
                page += 1;
                setPage(page);
              }}
            >
              {' '}
              Page suivante{' '}
            </button>
            <button
              onClick={() => {
                setPageChanges(false);
                setApiFilter(apiPages.previous);
                page -= 1;
                setPage(page);
              }}
            >
              {' '}
              Page precedente{' '}
            </button>
          </a>
        </ul>
      </div>
    );
  }
}

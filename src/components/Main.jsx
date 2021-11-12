/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import PageTallCards from './Pages/PageTallCards';
// eslint-disable-next-line import/no-named-as-default-member
import PageCards from './Pages/PageCards';
import AndroidFilter from './Filtres/AndroidFilter';
import AppleMacintoshFilter from './Filtres/AppleMacintoshFilter';
import IosFilter from './Filtres/IosFilter';
import LinuxFilter from './Filtres/LinuxFilter';
import NintendoFilter from './Filtres/NintendoFilter';
import PcFilter from './Filtres/PcFilter';
import PsFilter from './Filtres/PsFilter';
import XboxFilter from './Filtres/XboxFilter';
import AllFilter from './Filtres/AllFilter';
import NavBar from './NavBar';
import Genres from './Filtres/Genres/Genres';

let page = 1; // numéro de page

export default function Main() {
  const [aff, setAff] = React.useState(false); // state d'affichage de la page "tallCard"
  const [id, setID] = React.useState(34); // state ID
  const [apiFilter, setApiFilter] = React.useState(
    `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1`
  );
  const [pages, setPage] = React.useState(1);
  const [pageChanges, setPageChanges] = React.useState(true); // true = suivant et false = precedent
  const [apiPages, setApiPages] = React.useState(
    `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1`
  );
  const [error, setError] = React.useState(null); // state d'erreur de l'api
  const [isLoaded, setIsLoaded] = React.useState(false); // state chargement API
  const [items, setItems] = React.useState([]); // state de stockage de l'api
  useEffect(() => {
    if (pageChanges) {
      // si on selectionne page suivante
      axios
        .get(apiFilter) // requête
        .then(
          (res) => {
            // permet de transmettre à items la réponse de l'API grâce à "setState"
            setIsLoaded(true); // en chargement
            setItems(res.data.results); // stockage réponse
            setApiPages(res.data); // stockage de la data pour pouvoir recharger 20 autre jeux avec next ou previous
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            setIsLoaded(true); // en chargement
            setError(error); // stockage du message d'erreur
          }
        );
    } else {
      // si on sélectionne page precedente
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
  }, [pages, apiFilter]); // si pages ou apiFilter change on éxecute le useEffect
  if (error) {
    // si erreur on affiche laquel
    return <div>Erreur : {error.message}</div>; // si on a une erreur on l'affiche
  }
  if (!isLoaded) {
    // si ca charge on affiche "chargement..."
    return (
      <div style={{ textAlign: 'center' }}>Chargement de Games Library…</div>
    );
  }
  return (
    <Router>
      <div>
        <NavBar />
        <Genres setApiFilter={setApiFilter} />
        <AllFilter setApiFilter={setApiFilter} setAff={setAff} />
        <XboxFilter setApiFilter={setApiFilter} setAff={setAff} />
        <IosFilter setApiFilter={setApiFilter} setAff={setAff} />
        <AndroidFilter setApiFilter={setApiFilter} setAff={setAff} />
        <NintendoFilter setApiFilter={setApiFilter} setAff={setAff} />
        <AppleMacintoshFilter setApiFilter={setApiFilter} setAff={setAff} />
        <LinuxFilter setApiFilter={setApiFilter} setAff={setAff} />
        <PcFilter setApiFilter={setApiFilter} setAff={setAff} />
        <PsFilter setApiFilter={setApiFilter} setAff={setAff} />
        {/* si la tallCard est affiché (aff=true) on redirige l'utilisateur vers 
          la page de tallCards si on la quitte on le redirige vers home "/" */}
        {/* rajout dans la route tall-card de l'id du jeux */}
        {aff ? <Redirect to={`/tall-cards/${id}`} /> : <Redirect to="/" />}
        {/* si on a la tallCard affiché (aff=true) on enleve les boutons suivant et precedent */}
        {!aff ? (
          <a href="/#">
            {/* remonte en haut de la page */}
            <button
              type="button"
              onClick={() => {
                setPageChanges(true); // suivant
                setApiFilter(apiPages.next); // change l'api en allant vers le "next"
                page += 1; // modification du numéro de page
                setPage(page); // on stocke le numero de page dans un state
              }}
            >
              {' '}
              Page suivante{' '}
            </button>
            <button
              type="button"
              onClick={() => {
                setPageChanges(false); // precedent
                setApiFilter(apiPages.previous); // change l'api en allant vers le "previous"
                page -= 1;
                setPage(page);
              }}
            >
              {' '}
              Page precedente{' '}
            </button>
          </a>
        ) : null}
        <Switch>
          {/* création de la route /tall-cards relié au composant PageTallCards 
            qui prend en parametres les props aff, setAff et id */}
          <Route path="/tall-cards">
            <PageTallCards aff={aff} setAff={setAff} id={id} />
          </Route>
          {/* la route de base est la page ou l'on affiche les cartes */}
          <Route exact path="/">
            <PageCards
              setAff={setAff}
              setID={setID}
              apiFilter={apiFilter}
              setApiFilter={setApiFilter}
              items={items}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

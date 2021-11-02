/* eslint-disable no-else-return */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import './App.css';
import React from 'react';
import axios from 'axios';
import Cards from './components/Cards';

let page = 1;
/* filtrer par platerforme parent : &parent_platforms=4 */
function App() {
  const [pages, setPage] = React.useState(1);
  const [pageChanges, setPageChanges] = React.useState(true); // true = suivant et false = precedent
  const [apiFilter, setApiFilter] = React.useState(
    `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1`
  );
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    console.log(pages);
    console.log(pageChanges);
    // setApiFilter(`https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589`);
    if (pageChanges) {
      axios
        .get(apiFilter) // requête
        .then(
          (res) => {
            // permet de transmettre à items la réponse de l'API grâce à "setState"
            console.log(res.data);
            setIsLoaded(true);
            setItems(res.data.results);
            setApiFilter(res.data);
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
        .get(apiFilter) // requête
        .then(
          (res) => {
            // permet de transmettre à items la réponse de l'API grâce à "setState"
            console.log(res.data);
            setIsLoaded(true);
            setItems(res.data.results);
            setApiFilter(res.data);
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
  }, [pages]);

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
            />
          </li>
        ))}
        <a href="/#">
          <button
            onClick={() => {
              setPageChanges(true);
              setApiFilter(apiFilter.next);
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
              setApiFilter(apiFilter.previous);
              page -= 1;
              setPage(page);
            }}
          >
            {' '}
            Page precedente{' '}
          </button>
        </a>
      </ul>
    );
  }
}

export default App;

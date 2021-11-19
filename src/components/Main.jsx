/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import PageTallCards from './Pages/PageTallCards';
// eslint-disable-next-line import/no-named-as-default-member
import PageCards from './Pages/PageCards';
import RatingFilter from './Filtres/RatingFilter';
import ReleasedDateFilter from './Filtres/ReleasedDateFilter';
import LoadingApp from './LoadingApp';
import Footer from './Footer';
import Genres from './Filtres/Genres';
import '../App.css';
import Header from './Header';

let page = 1; // numéro de page

export default function Main(props) {
  const { setApiFilter, apiFilter } = props;
  const [aff, setAff] = useState(false); // state d'affichage de la page "tallCard"
  const [id, setID] = useState(34); // state ID
  const [pages, setPage] = useState(1);
  const [pageChanges, setPageChanges] = useState(true); // true = suivant et false = precedent
  const [apiPages, setApiPages] = useState(
    `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1`
  );
  const [error, setError] = useState(null); // state d'erreur de l'api
  const [isLoaded, setIsLoaded] = useState(false); // state chargement API
  const [items, setItems] = useState([]); // state de stockage de l'api
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
    // si ca charge on affiche le composant LoadingApp
    return <LoadingApp />;
  }
  return (
    <Router>
      <div className="App">
        <Header setApiFilter={setApiFilter} setAff={setAff} />
        {/* si la tallCard est affiché (aff=true) on redirige l'utilisateur vers 
          la page de tallCards si on la quitte on le redirige vers home "/" */}
        {/* rajout dans la route tall-card de l'id du jeux */}
        {aff ? <Redirect to={`/tall-cards/${id}`} /> : <Redirect to="/" />}
        {/* si on a la tallCard affiché (aff=true) on enleve les boutons suivant et precedent */}
        {!aff ? (
          <Grid
            container
            spacing={1}
            sx={{ width: '95%', margin: 'auto', mt: 6 }}
          >
            <Grid item xs={4}>
              <RatingFilter
                apiFilter={apiFilter}
                setApiFilter={setApiFilter}
                setAff={setAff}
              />
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
              <Genres setApiFilter={setApiFilter} apiFilter={apiFilter} />
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'right' }}>
              <ReleasedDateFilter
                apiFilter={apiFilter}
                setApiFilter={setApiFilter}
                setAff={setAff}
              />
            </Grid>
          </Grid>
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
        {!aff ? (
          <Grid
            container
            spacing={1}
            sx={{ width: '95%', margin: 'auto', mt: 6 }}
          >
            <Grid item xs={6}>
              <Button
                href="/#"
                onClick={() => {
                  setPageChanges(false); // precedent
                  setApiFilter(apiPages.previous); // change l'api en allant vers le "previous"
                  page -= 1;
                  setPage(page);
                }}
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              {/* remonte en haut de la page */}
              <Button
                href="/#"
                onClick={() => {
                  setPageChanges(true); // suivant
                  setApiFilter(apiPages.next); // change l'api en allant vers le "next"
                  page += 1; // modification du numéro de page
                  setPage(page); // on stocke le numero de page dans un state
                }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        ) : null}
      </div>
      <Footer />
    </Router>
  );
}

Main.propTypes = {
  setApiFilter: PropTypes.node.isRequired,
  apiFilter: PropTypes.node.isRequired,
};

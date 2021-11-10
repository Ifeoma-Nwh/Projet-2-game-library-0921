import React, { useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import * as PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Rating from '@mui/material/Rating';

export default function PageTallCards(props) {
  const { aff, setAff, id } = props;
  const [apiGames] = useState(
    `https://rawg.io/api/games/${id}?key=a9d50f2881ee441fbaf3e0368a2f3589`
  );
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [genres, setGenres] = useState([]); // stock les genres du jeux
  const [platformes, setPlatformes] = useState([]); // stock les platformes du jeux
  const [stores, setStores] = useState([]); // stock les stores du jeux
  const [developers, setDevelopers] = useState([]); // stock les developers du jeux
  const [itemsImages, setItemsImages] = useState([]);
  let affGenres = ''; // stock genres par genres
  // si genres contient des genres
  if (genres) {
    Array.from(genres).forEach((e) => {
      affGenres += ` ${e.name}, `;
      return affGenres;
    }); // permet de stocké chaque genres
  }
  affGenres = affGenres.substring(0, affGenres.length - 2);
  let affPlatforms = '';
  if (platformes) {
    Array.from(platformes).forEach((e) => {
      affPlatforms += ` ${e.platform.name}, `;
      return affPlatforms;
    });
  }
  affPlatforms = affPlatforms.substring(0, affPlatforms.length - 2);
  let affStores = '';
  if (stores) {
    Array.from(stores).forEach((e) => {
      affStores += ` ${e.store.name}, `;
      return affStores;
    });
  }
  affStores = affStores.substring(0, affStores.length - 2);
  let affDevelopers = '';
  if (developers) {
    Array.from(developers).forEach((e) => {
      affDevelopers += ` ${e.name}, `;
      return affDevelopers;
    });
  }
  affDevelopers = affDevelopers.substring(0, affDevelopers.length - 2);
  useEffect(() => {
    axios
      .get(
        `https://rawg.io/api/games/${id}/screenshots?key=a9d50f2881ee441fbaf3e0368a2f3589`
      ) // requête
      .then(
        (res) => {
          // permet de transmettre à items la réponse de l'API grâce à "setState"
          setIsLoaded(true);
          setItemsImages(res.data.results);
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        // eslint-disable-next-line no-shadow
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);
  useEffect(() => {
    axios
      .get(apiGames) // requête
      .then(
        (res) => {
          // permet de transmettre à items la réponse de l'API grâce à "setState"
          setIsLoaded(true);
          setItems(res.data); // stock la reponse
          setGenres(res.data.genres); // stock les genres de la reponse
          setPlatformes(res.data.platforms); // stock les platformes de la reponse
          setStores(res.data.stores); // stock les stores de la reponse
          setDevelopers(res.data.developers); // stock les developers de la reponse
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        // eslint-disable-next-line no-shadow
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

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
    <div className="tallCardFlex">
      <Card
        className="tallCard"
        onClick={() => {
          setAff(!aff); // modification de la valeur aff
        }}
      >
        {/* framework mui */}
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            width="100%"
            image={items.background_image}
            alt={items.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {items.name}
              {/* affiche le nom du jeux transmis */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Rating
                name="read-only"
                value={parseFloat(items.rating, 10)}
                readOnly
                precision={0.1}
                size="small"
              />
              <br />
              Plateformes:
              {affPlatforms} <br />
              Date: {items.released}
              <br />
              Genres:
              {affGenres} <br />
              {/* lien vers le site du jeux */}
              Website: <a href={items.website}> {items.website} </a> <br />
              Stores: {affStores} <br />
              Developers: {affDevelopers} <br />
              Description : <br />
              {items.description_raw}
              <br />
              <ImageList
                sx={{ width: '100%', height: 700 }}
                variant="quilted"
                cols={2}
                rowHeight="auto"
              >
                {itemsImages.map((item) => (
                  <ImageListItem key={item.image} cols="2" rows="2">
                    <img
                      {...srcset(item.image, 121, 2, 2)}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
PageTallCards.propTypes = {
  aff: PropTypes.bool.isRequired,
  setAff: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
};

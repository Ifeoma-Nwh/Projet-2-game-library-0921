import * as React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards(props) {
  const { image, name, released, genres, platformes, id, setID, setAff, aff } =
    props;
  let strGenres = ''; // permettra de stocker les noms des genres
  genres.forEach((genre) => {
    if (genre.name) {
      strGenres += `${genre.name}, `;
    }
    return strGenres;
  }); // Stock dans la variable "strGenres" les genres
  const str = strGenres.substring(0, strGenres.length - 1);
  let setPlatformes = ''; // permettra de stocker les noms des platefromes
  // eslint-disable-next-line prettier/prettier
  if (platformes) {
    Array.from(platformes).forEach((platforme) => {
      if (platforme.platform.name) {
        setPlatformes += `${platforme.platform.name}, `;
      }
      return setPlatformes;
    });
  }
  return (
    <Card
      className="card"
      onClick={() => {
        setAff(!aff);
        setID(id);
      }}
    >
      {/* framework mui */}
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
            {/* affiche le nom du jeux transmis */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Plateformes: {setPlatformes}
            <br />
            Date: {released}
            <br />
            Genres: {str}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
Cards.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  genres: PropTypes.node.isRequired,
  platformes: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  setID: PropTypes.node.isRequired,
  setAff: PropTypes.node.isRequired,
  aff: PropTypes.bool.isRequired,
};

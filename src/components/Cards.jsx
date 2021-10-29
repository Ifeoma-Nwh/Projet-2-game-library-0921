import * as React from 'react';
import "../App.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Cards(props) {
    const {image, name, released, genres, platformes} = props;
    let strGenres = "";//permettra de stocker les noms des genres
    genres.forEach((genre) => ( strGenres += genre.name + ", "));//Stock dans la variable "strGenres" les genres
    let str = strGenres.substring(0, strGenres.length -1);
    let setPlatformes = "";//permettra de stocker les noms des platefromes
    platformes.forEach((platforme) => ( setPlatformes += platforme.platform.name + ", "));
  return (
    <Card className='card'>
         {/* framework mui */}
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}{/* affiche le nom du jeux transmis */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Plateformes: {setPlatformes}<br/>
          Date: {released}<br/>
          Genres: {str}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"flex",
        justifyContent:"center"
        }}>
      </CardActions>
    </Card>
  );
}
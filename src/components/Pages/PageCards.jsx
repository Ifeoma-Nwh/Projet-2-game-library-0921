import React from 'react';
import * as PropTypes from 'prop-types';
import { Grid, Box } from '@mui/material';
import Cards from '../Cards';

export default function PageCards(props) {
  const { setAff, setID, items } = props;
  return (
    <Box flexGrow={1}>
      <Grid container spacing={1} sx={{ width: '95%', margin: 'auto' }}>
        {/* cards */}
        {/* on va lire le tableau de la réponse parametre par parametre */}
        {items.map((itemCard) => (
          <Grid item xs={12} md={6} lg={3}>
            {/* A chaque lecture de parametre on crée une nouvelle carte en fonction du parametre(jeux) */}
            <Cards
              image={itemCard.background_image}
              name={itemCard.name}
              released={itemCard.released}
              genres={itemCard.genres}
              platformes={itemCard.parent_platforms}
              id={itemCard.id}
              setID={setID}
              setAff={setAff}
              rating={itemCard.rating}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

PageCards.propTypes = {
  setID: PropTypes.node.isRequired,
  setAff: PropTypes.node.isRequired,
  items: PropTypes.node.isRequired,
};

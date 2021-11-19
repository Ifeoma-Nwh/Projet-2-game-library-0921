import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { Box } from '@mui/material';
import './Genres.css';

export default function Genres(props) {
  const [value, setValue] = useState('all');
  const { setApiFilter, apiFilter } = props;
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value === 'all') {
      setApiFilter(
        `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1`
      );
    } else {
      setApiFilter(`${apiFilter}&genres=${value}`);
    }
  }, [value]);

  return (
    <Box>
      <select onChange={handleChange} className="select-style">
        <option value="all">All Genre</option>
        <option value="4">Action</option>
        <option value="3">Adventure</option>
        <option value="11">Arcade</option>
        <option value="28">Board Game</option>
        <option value="17">Card</option>
        <option value="40">Casual</option>
        <option value="34">Educationnal</option>
        <option value="19">Family</option>
        <option value="6">Fighting</option>
        <option value="51">Indie</option>
        <option value="59">Massively Multiplayer</option>
        <option value="83">Platformer</option>
        <option value="7">Puzzle</option>
        <option value="1">Racing</option>
        <option value="5">RPG</option>
        <option value="2">Shooter</option>
        <option value="14">Simulation</option>
        <option value="15">Sports</option>
        <option value="10">Strategy</option>
      </select>
    </Box>
  );
}
Genres.propTypes = {
  apiFilter: PropTypes.node.isRequired,
  setApiFilter: PropTypes.node.isRequired,
};

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function Genres(props) {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('');
  const [genre, setGenre] = useState('');
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line react/prop-types
  const { setApiFilter, apiFilter } = props;
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // eslint-disable-next-line no-undef

  useEffect(() => {
    if (value) {
      setApiFilter(`${apiFilter}&genres=${value}`);
    }
  }, [value]);

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          label="Genre"
          onChange={handleChange}
        >
          <MenuItem value="4">Action</MenuItem>
          <MenuItem value="3">Adventure</MenuItem>
          <MenuItem value="11">Arcade</MenuItem>
          <MenuItem value="28">Board Game</MenuItem>
          <MenuItem value="17">Card</MenuItem>
          <MenuItem value="40">Casual</MenuItem>
          <MenuItem value="34">Educationnal</MenuItem>
          <MenuItem value="19">Family</MenuItem>
          <MenuItem value="6">Fighting</MenuItem>
          <MenuItem value="51">Indie</MenuItem>
          <MenuItem value="59">Massively Multiplayer</MenuItem>
          <MenuItem value="83">Platformer</MenuItem>
          <MenuItem value="7">Puzzle</MenuItem>
          <MenuItem value="1">Racing</MenuItem>
          <MenuItem value="5">RPG</MenuItem>
          <MenuItem value="2">Shooter</MenuItem>
          <MenuItem value="14">Simulation</MenuItem>
          <MenuItem value="15">Sports</MenuItem>
          <MenuItem value="10">Strategy</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

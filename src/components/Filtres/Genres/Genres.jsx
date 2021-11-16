/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

export default function Genres(props) {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('');
  // eslint-disable-next-line no-unused-vars
  const { setApiFilter } = props;
  const handleChange = (e) => {
    const result = e.target.value;
    setValue(result);
  };

  // eslint-disable-next-line no-undef
  useEffect(() => {
    setApiFilter(
      `https://api.rawg.io/api/games?key=473a51623a87475aaf68d7f76e519c12&page=1&genres=${value}`
    );
  }, [value]);
  return (
    <div>
      <select onChange={handleChange}>
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
    </div>
  );
}

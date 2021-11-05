/* eslint-disable no-unused-vars */
import React from 'react';
import * as PropTypes from 'prop-types';

export default function AllFilter(props) {
  // eslint-disable-next-line react/prop-types
  const { setApiFilter } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={() => {
        setApiFilter(
          `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1`
        );
      }}
    >
      All
    </button>
  );
}
AllFilter.protoTypes = {
  setApiFilter: PropTypes.string,
};

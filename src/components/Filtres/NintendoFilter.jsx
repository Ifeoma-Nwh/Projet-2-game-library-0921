import React from 'react';
import * as PropTypes from 'prop-types';

export default function NintendoFilter(props) {
  const { setApiFilter, setAff } = props;
  return (
    <button
      type="button"
      onClick={() => {
        setApiFilter(
          `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1&parent_platforms=7`
        );
        setAff(false);
      }}
    >
      Nintendo
    </button>
  );
}
NintendoFilter.propTypes = {
  setApiFilter: PropTypes.node.isRequired,
  setAff: PropTypes.node.isRequired,
};

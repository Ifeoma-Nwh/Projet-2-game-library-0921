import React from 'react';
import * as PropTypes from 'prop-types';

export default function LinuxFilter(props) {
  const { setApiFilter, setAff } = props;
  return (
    <button
      type="button"
      onClick={() => {
        setApiFilter(
          `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1&parent_platforms=6`
        );
        setAff(false);
      }}
    >
      Linux
    </button>
  );
}
LinuxFilter.propTypes = {
  setApiFilter: PropTypes.node.isRequired,
  setAff: PropTypes.node.isRequired,
};

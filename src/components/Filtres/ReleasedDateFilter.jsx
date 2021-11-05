import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

export default function DateFilter(props) {
  // eslint-disable-next-line react/prop-types
  const { apiFilter, setApiFilter } = props;
  const [isAscOrder, setIsAscOrder] = useState(false);
  const ascOrder = '&ordering=released';
  const descOrder = '&ordering=-released';

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={() => {
        if (isAscOrder) {
          setApiFilter(apiFilter + ascOrder);
        } else {
          setApiFilter(apiFilter + descOrder);
        }

        setIsAscOrder(!isAscOrder);
      }}
    >
      {isAscOrder ? 'Low to High' : 'High to Low'} Released
    </button>
  );
}

DateFilter.protoTypes = {
  apiFilter: PropTypes.string,
  setApiFilter: PropTypes.string,
};

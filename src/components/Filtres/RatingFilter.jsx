import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

export default function NoteFilter(props) {
  // eslint-disable-next-line react/prop-types
  const { apiFilter, setApiFilter } = props;
  const [isAscOrder, setIsAscOrder] = useState(false);
  const ascOrder = '&ordering=rating';
  const descOrder = '&ordering=-rating';

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
      {isAscOrder ? 'Low to High' : 'High to Low'} Rating
    </button>
  );
}

NoteFilter.protoTypes = {
  apiFilter: PropTypes.string,
  setApiFilter: PropTypes.string,
};

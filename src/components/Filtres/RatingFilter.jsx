import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Button } from '@mui/material';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

export default function NoteFilter(props) {
  const { apiFilter, setApiFilter, setAff } = props;
  const [isAscOrder, setIsAscOrder] = useState(false);
  const ascOrder = '&ordering=rating';
  const descOrder = '&ordering=-rating';

  return (
    <Button
      size="medium"
      onClick={() => {
        if (isAscOrder) {
          setApiFilter(apiFilter + ascOrder);
        } else {
          setApiFilter(apiFilter + descOrder);
        }

        setIsAscOrder(!isAscOrder);
        setAff(false);
      }}
    >
      Rating
      {isAscOrder ? (
        <ArrowUpwardOutlinedIcon fontSize="small" />
      ) : (
        <ArrowDownwardOutlinedIcon fontSize="small" />
      )}
    </Button>
  );
}

NoteFilter.propTypes = {
  apiFilter: PropTypes.string.isRequired,
  setApiFilter: PropTypes.node.isRequired,
  setAff: PropTypes.node.isRequired,
};

import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Button } from '@mui/material';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

export default function DateFilter(props) {
  const { apiFilter, setApiFilter, setAff } = props;
  const [isAscOrder, setIsAscOrder] = useState(false);
  const ascOrder = '&ordering=released';
  const descOrder = '&ordering=-released';

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
      Released
      {isAscOrder ? (
        <ArrowUpwardOutlinedIcon fontSize="small" />
      ) : (
        <ArrowDownwardOutlinedIcon fontSize="small" />
      )}{' '}
    </Button>
  );
}

DateFilter.propTypes = {
  apiFilter: PropTypes.string.isRequired,
  setApiFilter: PropTypes.node.isRequired,
  setAff: PropTypes.node.isRequired,
};

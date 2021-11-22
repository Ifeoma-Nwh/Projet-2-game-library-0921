import * as React from 'react';
import * as PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography, InputBase } from '@mui/material/';
// eslint-disable-next-line import/no-unresolved
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import '../App.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar(props) {
  const { setApiFilter, setAff } = props;
  const [searchValue, setSearchValue] = useState('');
  const [searchValueInput, setSearchValueInput] = useState('');

  const handleOnchange = (e) => {
    setSearchValueInput(e.target.value);
    setSearchValue(e.target.value.replace(/ /g, '-'));
  };

  useEffect(() => {
    setApiFilter(
      `https://api.rawg.io/api/games?key=d3437269835545eaa073f2e0d0032525&search=${searchValue}`
    );
  }, [searchValue]);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: 'black',
            height: '15vh',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <NavBar setApiFilter={setApiFilter} setAff={setAff} />
            <Typography
              className="neon-effect"
              sx={{
                textAlign: 'center',
                letterSpacing: '20px',
                fontSize: '4vw',
                width: '75vw',
              }}
            >
              GAME LIBRARY
            </Typography>
          </Box>
          <Search xs={12}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchValueInput}
              onChange={handleOnchange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
SearchAppBar.propTypes = {
  setApiFilter: PropTypes.node.isRequired,
  setAff: PropTypes.node.isRequired,
};

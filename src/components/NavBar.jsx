import * as React from 'react';
import * as PropTypes from 'prop-types';
import '../App.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LinuxFilter from './Filtres/LinuxFilter';
import AllFilter from './Filtres/AllFilter';
import PcFilter from './Filtres/PcFilter';
import PsFilter from './Filtres/PsFilter';
import XboxFilter from './Filtres/XboxFilter';
import IosFilter from './Filtres/IosFilter';
import AndroidFilter from './Filtres/AndroidFilter';
import NintendoFilter from './Filtres/NintendoFilter';
import AppleMacintoshFilter from './Filtres/AppleMacintoshFilter';

export default function NavBar(props) {
  const { setApiFilter, setAff } = props;
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        textAlign: 'justify',
        margin: '1.5em',
        fontSize: '1.25em',
      }}
      role="presentation"
      onClick={
        (toggleDrawer(anchor, false),
        () => {
          setAff(false);
        })
      }
      onKeyDown={toggleDrawer(anchor, false)}
    >
      PLATEFORMES
      <List>
        {[
          <Link to="/all-filter" className="navbar-link">
            All
          </Link>,
          <Link to="/pc-filter" className="navbar-link">
            Pc
          </Link>,
          <Link to="/playstation-filter" className="navbar-link">
            PlayStation
          </Link>,
          <Link to="/xbox-filter" className="navbar-link">
            X Box
          </Link>,
          <Link to="/ios-filter" className="navbar-link">
            Ios
          </Link>,
          <Link to="/applemacintosh" className="navbar-link">
            Apple Macintosh
          </Link>,
          <Link to="/linux-filter" className="navbar-link">
            Linux
          </Link>,
          <Link to="/nintendo-filter" className="navbar-link">
            Nintendo
          </Link>,
          <Link to="/android-filter" className="navbar-link">
            Android
          </Link>,
        ].map((text) => (
          <ListItemButton key={text}>
            <ListItemText primary={text} color="#fff" />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Router>
      <div>
        {['menu'].map((anchor) => {
          return (
            <React.Fragment key={anchor} background="red">
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon sx={{ color: '#fff' }} />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          );
        })}
        <Switch>
          <Route path="/linux-filter">
            <LinuxFilter setApiFilter={setApiFilter} />
          </Route>
          <Route exact path="/all-filter">
            <AllFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/pc-filter">
            <PcFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/playstation-filter">
            <PsFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/xbox-filter">
            <XboxFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/ios-filter">
            <IosFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/android-filter">
            <AndroidFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/nintendo-filter">
            <NintendoFilter setApiFilter={setApiFilter} />
          </Route>
          <Route path="/applemacintosh-filter">
            <AppleMacintoshFilter setApiFilter={setApiFilter} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
NavBar.propTypes = {
  setApiFilter: PropTypes.node.isRequired,
  setAff: PropTypes.node.isRequired,
};

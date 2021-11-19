import * as React from 'react';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

function TeamList() {
  return (
    <List
      sx={{
        width: '70%',
        color: '#fff',
        margin: '0 auto',
      }}
    >
      <ListItem>
        <ListItemText primary="Bryan Kaneb" sx={{ ml: 0 }} />
        <ListItemIcon>
          <a
            className="link"
            href="https://www.linkedin.com/in/bryan-kaneb/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="icon-color" />
          </a>
        </ListItemIcon>
        <ListItemIcon>
          <a
            className="link"
            href="https://github.com/bkaneb"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon-color" />
          </a>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemText primary="Laura DuBoeuf" sx={{ ml: 0 }} />
        <ListItemIcon>
          <a
            className="link"
            href="https://www.linkedin.com/in/laura-duboeuf-lornage-8b28a7220/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="icon-color" />
          </a>
        </ListItemIcon>
        <ListItemIcon>
          <a
            className="link"
            href="https://github.com/LauraDuboeuf"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon-color" />
          </a>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemText primary="Oualid Kheloufi" sx={{ ml: 0 }} />
        <ListItemIcon>
          <a
            className="link"
            href="https://www.linkedin.com/in/oualid-kheloufi-351286ba/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="icon-color" />
          </a>
        </ListItemIcon>
        <ListItemIcon>
          <a
            className="link"
            href="https://github.com/bkaneb"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon-color" />
          </a>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemText primary="Ifeoma Nwaoha" sx={{ ml: 0 }} />
        <ListItemIcon>
          <a
            className="link"
            href="https://www.linkedin.com/in/ifeoma-nwaoha/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="icon-color" />
          </a>
        </ListItemIcon>
        <ListItemIcon>
          <a
            className="link"
            href="https://github.com/Ifeoma-Nwh"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon-color" />
          </a>
        </ListItemIcon>
      </ListItem>
    </List>
  );
}

export default function Footer() {
  return (
    <Grid container spacing={1} mt={2}>
      <Grid item xs={12} lg={4}>
        <Box className="box-width">
          <h3>About Us</h3>
          <p style={{ textAlign: 'center' }}>
            Game Library is a React project-based using the CSS framework
            Material UI.
            <br /> Made by Front End Developers for a group project during an
            intensive Web Development Bootcamp.
          </p>
        </Box>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Box className="box-width">
          <h3>Team</h3>
          <TeamList />
        </Box>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Box className="box-width">
          <h3>Ressources</h3>
          <p style={{ textDecoration: 'underline' }}>
            <a
              className="link"
              href="https://rawg.io/apidocs"
              target="_blank"
              rel="noreferrer"
            >
              RAWG API
            </a>
          </p>
        </Box>
      </Grid>
    </Grid>
  );
}

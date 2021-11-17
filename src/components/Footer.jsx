import * as React from 'react';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';
import { Grid, List, ListItem, ListItemText, IconButton } from '@mui/material';

function TeamList() {
  return (
    <List
      sx={{
        width: '100%',
      }}
    >
      <ListItem>
        <ListItemText primary="Bryan Kaneb" sx={{ ml: 10 }} />
        <IconButton>
          <a
            className="link"
            href="https://www.linkedin.com/in/bryan-kaneb/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </IconButton>
      </ListItem>
      <ListItem>
        <ListItemText primary="Laura DuBoeuf" sx={{ ml: 10 }} />
        <IconButton>
          <a
            className="link"
            href="https://www.linkedin.com/in/laura-duboeuf-lornage-8b28a7220/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </IconButton>
      </ListItem>
      <ListItem>
        <ListItemText primary="Oualid Kheloufi" sx={{ ml: 10 }} />
        <IconButton>
          <a
            className="link"
            href="https://www.linkedin.com/in/oualid-kheloufi-351286ba/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </IconButton>
      </ListItem>
      <ListItem>
        <ListItemText primary="Ifeoma Nwaoha" sx={{ ml: 10 }} />
        <IconButton>
          <a
            className="link"
            href="https://www.linkedin.com/in/ifeoma-nwaoha/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </IconButton>
      </ListItem>
    </List>
  );
}

export default function Footer() {
  return (
    <Grid container spacing={1} mt={2}>
      <Grid item xs={4}>
        <Box className="box-width">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            aperiam repellendus, voluptates omnis qui velit ipsum! Totam minus
            exercitationem dignissimos.
          </p>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box className="box-width">
          <h3>Team</h3>
          <TeamList />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box className="box-width">
          <h3>Ressources</h3>
          <p>
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

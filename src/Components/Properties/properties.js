import * as React from 'react';
import { Link } from 'react-router-dom'
import './properties.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import RoomsContainer from '../RoomsContainer';

import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'


const drawerWidth = 240;

function Properties(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <br/><br/>
<List >
        <Link style={{textDecoration: 'none'}} to="profile" className='navlink'>
          <ListItem button >
            <ListItemText primary={'MY PROFILE'} />
          </ListItem>
        </Link>

        <Link style={{textDecoration: 'none'}} to="google" className='navlink'>
          <ListItem button >
            <ListItemText primary={'GOOGLE MAP'} /> 
          </ListItem>
        </Link>
         
        <Link style={{textDecoration: 'none'}} to="history" className='navlink'>
          <ListItem button >
            <ListItemText primary={'BOOKING HISTORY'} />
          </ListItem>
        </Link> 
     
        <Link style={{textDecoration: 'none'}} to="/" className='navlink'>
          <ListItem button >
            <ListItemText primary={'HOME PAGE'} />
          </ListItem>
        </Link>
          
          <ListItem button >
            <AmplifySignOut />
          </ListItem>
        

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{height:110}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap component="div">
            AVAILABLE ROOMS
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
     
        <Toolbar />
        <div style={{marginLeft:40, width:1200}}>
             <RoomsContainer />
        </div>
      
    </Box>
  );
}
export default withAuthenticator(Properties);

import * as React from 'react';
import { Link } from 'react-router-dom'
import './home.css'

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

const drawerWidth = 240;

export const Home = (props) => {
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
        <Link style={{textDecoration: 'none'}} to="about" className='navlink'>
          <ListItem button >
            <ListItemText primary={'ABOUT US'} />
          </ListItem>
        </Link>

          <Link style={{textDecoration: 'none'}} to="contact" className='navlink'>
          <ListItem button >
            <ListItemText primary={'CONTACTS'} />
          </ListItem>
        </Link>

        <Link style={{textDecoration: 'none'}} to="services" className='navlink'>
          <ListItem button >
            <ListItemText primary={'SERVICES'} /> 
          </ListItem>
        </Link>

        <Link style={{textDecoration: 'none'}} to="google" className='navlink'>
          <ListItem button >
            <ListItemText primary={'GOOGLE MAPS'} /> 
          </ListItem>
        </Link>
         
          <Link style={{textDecoration: 'none'}} to="properties" className='navlink'>
          <ListItem button >
            <ListItemText primary={'START BOOKING'} />
          </ListItem>
        </Link>

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
            Welcome to Alex's hotel online bookings
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
        <div className="Homeheader">
       
    <div className="wrapper">
     
      </div>
      <div className="welcome-text">
          <Link to='properties' className="btn btn-outline-primary btn-block btn-lg float-right " style={{margin:50, marginLeft:300}} >Get Started</Link>
    </div>
   </div>
    
    </Box>
  );
}
export default Home;

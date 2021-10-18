import * as React from 'react';
import { Link } from 'react-router-dom'
//import './properties.css'
import aboutPic from '../../images/background.jpg'

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

function About(props) {
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
        <Link style={{textDecoration: 'none'}} to="contact" className='navlink'>
          <ListItem button >
            <ListItemText primary={'CONTACTS'} />
          </ListItem>
        </Link>

        <Link style={{textDecoration: 'none'}} to="#" className='navlink'>
          <ListItem button >
            <ListItemText primary={'GOOGLE MAPS'} /> 
          </ListItem>
        </Link>
         
          <Link style={{textDecoration: 'none'}} to="properties" className='navlink'>
          <ListItem button >
            <ListItemText primary={'START BOOKING'} />
          </ListItem>
           </Link>
     
        <Link style={{textDecoration: 'none'}} to="/" className='navlink'>
          <ListItem button >
            <ListItemText primary={'HOME PAGE'} /> 
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
            ABOUT US
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
      <div className="container aboutus" style={{width:1000}}>
        <div className="row">
            <div className="col-md-6 col-12 my-auto">
                <img src={aboutPic}  alt="about us" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 my-auto">
                <h1 className="display-4 text-center my-5">About Us </h1>
                <p className="lead text-justify text-center">We are an independent hotel business that provide 5 star hotels at low prices. We provide better service to the people</p>
                <div className="text-center col-md-6 col-12 mx-auto">
                    <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">Contact us</Link>
                </div>
            </div>
        </div>
        <div className="about_company">
            <h1 className="display-4">About Company</h1>
            <div className="pt-4">
                <p className="about_info">Our story begin in 2010 along the Matsulu streets. The idear was there when me and my brother came with an idar to build a hotel in our place. We had the idear since 2015. in 2020 we bring it into live and now we are up and running</p>
            </div>
        </div>

        <div className="team">
            <h1 className="display-4">Our Team</h1>
        </div>
        <div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://scontent.fpry1-1.fna.fbcdn.net/v/t1.6435-9/199240154_1844545482419725_496185854030148453_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGB52sKJHe5XwSBJN1lHAc1ugoNyblSQie6Cg3JuVJCJ1Kh7gHwBxX2xbnnzAj1ms1VaasNNCRv5hCo2MDR-yWa&_nc_ohc=qs2XjM9770IAX9JSSTc&_nc_pt=5&_nc_ht=scontent.fpry1-1.fna&oh=01d3c6752019b0f63be716a7f1107239&oe=61778D8F" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Director and a Developer</h5>
                        <div className="card-text text-black-50">CEO <p className="float-right">5 years</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://scontent.fpry1-1.fna.fbcdn.net/v/t1.6435-9/82128484_756729448171741_5641420035554541568_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGJTwplq8DH3IVnX-2BaLnH2iLxqyqLpRraIvGrKoulGpAR1X4IvX_SzO87dgJbDaM22PXqaIh9-oISleY7vrJL&_nc_ohc=ts0raDWzSQEAX-6KrG1&_nc_pt=5&_nc_ht=scontent.fpry1-1.fna&oh=e9f737c66eab52bd3a27a9de8d1ae3c2&oe=6178649F" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Team Member</h5>
                        <div className="card-text text-black-50">Manager <p className="float-right">5 years</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
    </Box>
  );
}
export default About;
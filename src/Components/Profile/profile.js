import * as React from 'react';
import { Link } from 'react-router-dom'
import './profile.css'

import HouseIcon from '@mui/icons-material/House';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
//import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HistoryIcon from '@mui/icons-material/History';
import SchoolIcon from '@mui/icons-material/School';
import TimelineIcon from '@mui/icons-material/Timeline';
import PersonIcon from '@mui/icons-material/Person'; 
import Avatar from '@mui/material/Avatar';
 
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

//import Amplify from 'aws-amplify'

//import awsconfig from '../../aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from '../../graphql/queries'


const drawerWidth = 240;

function Profile(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [user, setUser] = React.useState([]);
  const [profile, setProfile] = React.useState([]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 

  React.useEffect(() => {

   const getProfile = async (e) => {
        //e.preventDefault();
        console.log('called');
        try{
          console.log('try');
         const userData = await API.graphql(graphqlOperation(getUser, {id: "1de70f66-53b3-4d46-85a6-842d04a2016f"}));
         console.log('yes22 ', userData);
        // console.log('>> ', profile.data?.data.getUserByEmail.name, '<<');
         setProfile({data: userData})
           } catch (e) {
               console.log('error getting user 22', e);  
           } 
  }
      function loadUser() { 
          return Auth.currentAuthenticatedUser({bypassCache: true});
      }
      async function onLoad() {
          try {
              const user = await loadUser();
              setUser(user.attributes);
          }catch (e) {
              alert(e)
          }
      }
      onLoad();
      getProfile();
  }, []);



  const drawer = (
    <div>
      <Toolbar />
      <br/><br/>
<List >
        <Link style={{textDecoration: 'none'}} to="update" className='navlink'>
          <ListItem button >
            <ListItemText primary={'APDATE PROFILE'} />
          </ListItem>
        </Link>

        <Link style={{textDecoration: 'none'}} to="properties" className='navlink'>
          <ListItem button >
            <ListItemText primary={'BOOK ROOM'} />
          </ListItem>
        </Link>

        <Link style={{textDecoration: 'none'}} to="#" className='navlink'>
          <ListItem button >
            <ListItemText primary={'GOOGLE MAP'} /> 
          </ListItem>
        </Link>


         
        <Link style={{textDecoration: 'none'}} to="#" className='navlink'>
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
             Hey '{profile.data?.data.getUser.name}' welcome to your profile
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
     <br/><br/>
        <Toolbar />    
     <div className="content">
       <br/>
      <div class="resume_profile">
      <Avatar alt="Ernest" style={{height:150, width:220, margin: "0 auto"}} src={profile.data?.data.getUser.picture} />
      </div>
      <br/>
      <div class="resume_content" style={{textAlign: 'center'}}>
      <div class="resume_item resume_info"> 
      <div class="title" >
           <p class="bold">{profile.data?.data.getUser.name}&nbsp;{profile.data?.data.getUser.surname}</p>
      </div>
          <p class="regular">EMAIL <EmailIcon/></p>
      <p class="leftp">{user.email}</p>
      <p class="regular">CELL <LocalPhoneIcon/></p>
      <p class="leftp">{user.phone_number}</p>
      <p class="regular">GENDER </p>
      <p class="leftp">{profile.data?.data.getUser.gender}</p>
      <p class="regular">ABOUT <PersonIcon/></p>
      <div className="description-form">
          <p><textarea
          name="description"
          type="text"
          rows="3"
          className="loginTextArea" 
          placeholder="Type about you"
          required
          value={profile.data?.data.getUser.description}
          style={{width: 300}}
          
          /></p>
      </div>  
  
      </div>
      
      </div>      
        </div>
    </Box>
  );
}
export default withAuthenticator(Profile);

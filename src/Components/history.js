import * as React from 'react';
import { Link } from 'react-router-dom'

import dateFormat from 'dateformat'

import { API, graphqlOperation } from 'aws-amplify'
import { listBookings } from "../graphql/queries"

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

function History(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [history, setHistory] = React.useState([])
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

     const fetch = async () => {
         try {
           const historyData = await API.graphql(graphqlOperation(listBookings))
           const historyList = historyData.data.listBookings.items;
           console.log('history ', historyList);
           setHistory(historyList)
          } catch (error) {
           console.log('Error on fetchng data ', error)
         }
      }

  React.useEffect(() => {
     fetch()
  }, [])

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
            Booking history
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
       {
         history.map(history => {
          return<div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4" key={history.ID} style={{width:700}}>
                     
                    <div className="card-body" >
                        <h5 className="card-title mb-0">{dateFormat(history.createdAt, "dd mmmm yyyy, dddd")}</h5>
                        <div className="card-text text-black-50">
                            Check in Date: <p className="float-right">{dateFormat(history.startDate, "dd mmmm yyyy")}</p>
                            Checkout Date: <p className="float-right">{dateFormat(history.endDate, "dd mmmm yyyy")}</p>
                            Total payment: <p className="float-right">{history.price}</p>
                            Total no days: <p className="float-right">{history.numberOfDays}</p>
                        </div>
                    </div>  
                </div>
            </div> 
            
          </div>
       })}
    </div>

    </Box>
  );
}
export default History;
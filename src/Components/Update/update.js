import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './update.css'

import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createUser } from '../../graphql/mutations'
import config from '../../aws-exports'



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

import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
//Amplify.configure(awsconfig)

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config


const drawerWidth = 240;

function Update(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [user, setUser] = React.useState([]);


  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [cell, setCell] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState("");


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
           const data = {email: email, name: name, surname: surname, cell: cell, gender: gender, description: description, picture: image };
             console.log('data', data)
           try{
               await API.graphql(graphqlOperation(createUser, { input: data}));
               alert('Details successfully updated')
               window.location.replace('/profile')
           } catch (e) {
               console.log('error creating user ', e);
           }  
    }

    function getInput(){
      var email = document.getElementById("email").value;
      var cell = document.getElementById("contact").value;
      var url = "https://scontent.fjnb5-1.fna.fbcdn.net/v/t1.6435-9/242767580_1917897685084504_3459774556598989677_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEL94uioiiCG4TBfVcEolxbi3qxCEPUSgmLerEIQ9RKCfcnT72vfw-fw612wBFfdytJXbBquMd35yoAVIfSlU9r&_nc_ohc=sJU_qGyJIiEAX-xp4EP&_nc_ht=scontent.fjnb5-1.fna&oh=90b487e01e5d8e87e08dfa3431231753&oe=6183DD43";
      setEmail(email);
      setCell(cell);
      setImage(url)
    }
/*

    
    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `displayPic/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        try {
            // Upload the file to s3 with public access level. 
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            // Retrieve the uploaded file to display
            const image = await Storage.get(key, { level: 'public' })
            setImage(image);
            setUserDetails({ ...userDetails, image: url });
            console.log(image)
        } catch (err) {
            console.log(err);
        }
    }*/

  React.useEffect(() => {
      function loadUser() {
          return Auth.currentAuthenticatedUser({bypassCache: true});
      }
      async function onLoad() {
          try {
              const user = await loadUser();
              setUser(user.attributes);
              setEmail(user.email)
          }catch (e) {
              alert(e)
          }
      }
      onLoad();
  }, []);



  const drawer = (
    <div>
      <Toolbar />
      <br/><br/>
<List >
        <Link style={{textDecoration: 'none'}} to="profile" className='navlink'>
          <ListItem button >
            <ListItemText primary={'PROFILE'} />
          </ListItem>
        </Link>

        <Link style={{textDecoration: 'none'}} to="#" className='navlink'>
          <ListItem button >
            <ListItemText primary={'GOOGLE MAP'} /> 
          </ListItem>
        </Link>

        <Link style={{textDecoration: 'none'}} to="properties" className='navlink'>
          <ListItem button >
            <ListItemText primary={'BOOK ROOM'} />
          </ListItem>
        </Link>
         
        <Link style={{textDecoration: 'none'}} to="#" className='navlink'>
          <ListItem button >
            <ListItemText primary={'BOOKING HISTORY'} />
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
          <Typography variant="h3" noWrap component="div" >
            Update your profile
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
<section className="updateheader">
                    <form className="loginform" style={{height: '110vh'}} onSubmit={handleSubmit}>
                        <div className="form-fields">
                            <div className="title-form">
                                <p><label htmlFor="name" className="loginlabel">Name</label></p>
                                <p><input
                                    name="Name"
                                    type="text"
                                    placeholder="Enter name"
                                    className="logininput" 
                                    onChange={(e) => setName(e.target.value )}
                                    required
                                /></p>
                            </div>
                             <div className="title-form">
                                <p><label htmlFor="Surname" className="loginlabel">Surname</label></p>
                                <p><input
                                   className="logininput" 
                                    name="Surname"
                                    type="text"
                                    placeholder="Enter Surname"
                                    onChange={(e) => setSurname(e.target.value)}
                                    required
                                /></p>
                            </div>

                            <div className="title-form">
                                <p><label htmlFor="email" className="loginlabel">Email</label></p>
                                <p><input
                                className="logininput" 
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="Enter email"
                                    value={user.email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                /></p>
                            </div>

                              <div className="title-form">
                                <p><label htmlFor="contact" className="loginlabel">Contact</label></p>
                                <p><input
                                className="logininput" 
                                    name="contact"
                                    id="contact"
                                    type="text"
                                    placeholder="Enter contact"
                                    value={user.phone_number}
                                    onChange={(e) => setCell(e.target.value)}
                                    required 
                                /></p>
                            </div>

                              <div className="title-form">
                                <p><label htmlFor="Gender" className="loginlabel">Gender</label></p>
                                <p> <select 
                                name="gender" 
                                id="gender" 
                                className="logininput" 
                                required
                                onChange={(e) => setGender( e.target.value )}  >
                                <option value="" disabled selected hidden>Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select></p>
                            </div>
                            <div className="description-form" style={{marginLeft:1000}}>
                                <p><label htmlFor="description" className="loginlabel">Your Description</label></p>
                                <p><textarea
                                    name="description"
                                    type="text"
                                    rows="4"
                                    className="loginTextArea" 
                                    placeholder="Type about you"
                                    onChange={(e) => setDescription(e.target.value )}
                                    required
                                /></p>
                            </div>   
                      <br/> <br/>
                            <div className="submit-form">
                                <button className="log_btn" type="submit" onClick={getInput}>Submit</button>
                            </div>
                        </div>
                    </form>
        </section>
    </Box>
  );
}
export default withAuthenticator(Update);




/*import React, { useState } from 'react'
import './update.css'
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createUser } from '../../graphql/mutations'
import config from '../../aws-exports'

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config


const Update = () => {
    const [image, setImage] = useState(null);
    const [userDetails, setUserDetails] = useState({ email: "", name: "", surname: "", cell: "", gender: "", image: "", description: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!userDetails.email || !userDetails.name) return
            await API.graphql(graphqlOperation(createUser, { input: userDetails }))
            setUserDetails({ email: "", name: "", surname: "", cell: "", gender: "", image: "", description: "" })
        } catch (err) {
            console.log('error creating:', err)
        }
    }

    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `displayPic/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        try {
            // Upload the file to s3 with public access level. 
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            // Retrieve the uploaded file to display
            const image = await Storage.get(key, { level: 'public' })
            setImage(image);
            setUserDetails({ ...userDetails, image: url });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="admin-wrapper">
                <section>
                    <header className="form-header">
                        <h3>update information</h3>
                   
                    </header>
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div className="form-image">
                            {image ? <img className="image-preview" src={image} alt="" /> : <input
                                type="file"
                                accept="image/jpg"
                                onChange={(e) => handleImageUpload(e)} />}

                        </div>
                        <div className="form-fields">
                            <div className="title-form">
                                <p><label htmlFor="name">Name</label></p>
                                <p><input
                                    name="Name"
                                    type="text"
                                    placeholder="Enter name"
                                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                    required
                                /></p>
                            </div>
                             <div className="title-form">
                                <p><label htmlFor="Surname">Surname</label></p>
                                <p><input
                                    name="Surname"
                                    type="text"
                                    placeholder="Enter Surname"
                                    onChange={(e) => setUserDetails({ ...userDetails, surname: e.target.value })}
                                    required
                                /></p>
                            </div>

                            <div className="title-form">
                                <p><label htmlFor="email">Email</label></p>
                                <p><input
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                    required
                                /></p>
                            </div>

                              <div className="author-form">
                                <p><label htmlFor="Contact">Contact</label></p>
                                <p><input
                                    name="Contact"
                                    type="text"
                                    placeholder="Enter contact"
                                    onChange={(e) => setUserDetails({ ...userDetails, contact: e.target.value })}
                                    required
                                /></p>
                            </div>

                              <div className="title-form">
                                <p><label htmlFor="Gender">Gender</label></p>
                                <p> <select 
                                name="gender" 
                                id="gender" 
                                onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })}  >
                                <option value="" disabled selected hidden>Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select></p>
                            </div>

                            <div className="description-form">
                                <p><label htmlFor="description">Your Description</label></p>
                                <p><textarea
                                    name="description"
                                    type="text"
                                    rows="4"
                                    placeholder="Type about you"
                                    onChange={(e) => setUserDetails({ ...userDetails, description: e.target.value })}
                                    required
                                /></p>
                            </div>
                                                   
                            <div className="submit-form">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </section>
        </section>
    )
}

export default Update
*/
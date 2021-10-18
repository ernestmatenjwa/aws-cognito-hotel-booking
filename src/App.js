import React from 'react'
import { Home } from './Components/Home/home'
import Properties  from './Components/Properties/properties'
import Services  from './Components/Services'
import History  from './Components/history'

import { RoomProvider } from './Global/context'

import Rooms from './Components/pages/Rooms';
import SingleRoom from './Components/pages/SingleRoom';
import Error from './Components/pages/Error';
//import Navbar from './components/Navbar';
import About from './Components/pages/About';
//import Footer from './components/Footer';
import Contact from './Components/pages/Contact';
import Booknow from './Components/pages/Booknow';
import Google from './Components/Google';

import Update  from './Components/Update/update'
import Profile  from './Components/Profile/profile'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <RoomProvider>
         <BrowserRouter>
          <Switch>
            <Route exact path='/' component={() => <Home  />} />   
            <Route path="/properties" component={Properties} />  
            <Route path="/profile" component={Profile} />  
            <Route path="/update" component={Update} />  
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/rooms" component={Rooms}/>
            <Route exact path="/history" component={History}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/google" component={Google}/>
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route exact path="/booknow/:slug" component={Booknow} />
            <Route component={Error}/>     
          </Switch>
        </BrowserRouter> 
      </RoomProvider>
       
    </div>
  );
}

export default App;

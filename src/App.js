import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import GetData from './components/GetData';
import Lyrics from './components/lyrics'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'




function App() {
  return (
    <Router>
    <React.Fragment>
       <Navbar />
       <Switch>
          <Route exact path='/' component={GetData}></Route>
          <Route exact path='/lyrics/tracks/:id' component={Lyrics}></Route>
       </Switch>
    </React.Fragment>
    </Router>
  );


}

export default App;

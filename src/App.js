import React from "react";
import Home from "./components/Home";
import Movie from "./components/Movie";
import TV from "./components/TV";
import Nav from "./components/Nav";
import "./style/row.css";
import "./style/App.css";

import { Route, BrowserRouter as Router } from "react-router-dom";
function App() {
   return (
      <div className='app'>
         <Router>
            <Nav />
            <Route path='/' exact component={Home} />
            <Route path='/Movies' exact component={Movie} />
            <Route path='/TV' exact component={TV} />
         </Router>
      </div>
   );
}

export default App;

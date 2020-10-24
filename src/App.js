import React from 'react';
import Header from "./Header"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './app.css';
import Sidebar from "./Sidebar"
import Recomended from "./Recomended"
import SearchPage from "./SearchPage"
function App() {
  return (
    <div className="app">
        <Router>
        <Header />
          <Switch>
            <Route path="/search/:searchterm">
                <div className="app__page">
                  <Sidebar/>
                  <SearchPage/>
                </div>
            </Route>
            <Route path="/">
                <div className="app__page">
                  <Sidebar/>
                  <Recomended />
                </div>
            </Route>

          </Switch>
        </Router>

    </div>
  );
}

export default App;

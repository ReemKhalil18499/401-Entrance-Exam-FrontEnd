import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';
import "~bootstrap/scss/bootstrap";
import './App.scss';
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
  
export default function App() {
  return (
    <div style={{}}>
      <Card
      >
        <CardContent>
          
          
        </CardContent>
        <CardActions>
          {/* <Button size="small">Stay Safe.....</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}



const mongoose = require("mongoose");

class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `Home` component, if they are not, render the `Login` component */}
              </Route>
              <Route exact path="/favFruit">
                {/* TODO: if the user is logged in, render the `FavFruit` component, if they are not, render the `Login` component */}
              </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);

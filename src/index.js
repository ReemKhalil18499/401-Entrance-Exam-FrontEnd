import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');



const config = {
  
    "sub": "google-oauth2|105779011674883238104",
    "given_name": "Reem",
    "family_name": "Khalil",
    "nickname": "khalil.reem18499",
    "name": "Reem Khalil",
    "picture": "https://lh3.googleusercontent.com/a/AATXAJwYE-PmQQVwr2D-oN9XbAeBOwwJ1nxSqA4ezTOY=s96-c",
    "locale": "en-GB",
    "updated_at": "2021-09-28T08:22:00.288Z",
  
class Fruit extends React.Component{

  render() {
  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  ),

  }
};
app.use(auth(config));

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

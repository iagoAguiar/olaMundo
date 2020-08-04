import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import pagina2 from './pages/teste'
import Home from './pages/Home'

const pagina404 = () => (
  <div>
  <img alt='imagem de erro' src="https://miro.medium.com/max/1600/1*ASPrAbd2qtFVSVuru7Y7Rw.png"></img>
  </div> 
)



ReactDOM.render(
 
 <BrowserRouter>
  <Switch>
  <Route path="/" component={App} exact/>
  <Route path="/pagina2" component={pagina2} />  
  <Route  component={pagina404} />
  </Switch>
 </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

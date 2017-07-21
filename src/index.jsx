import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import app from './components/App.css';
import reactLogo from './components/ReactLogo.css';

let styles = {
  app: app,
  reactLogo: reactLogo
}

ReactDOM.render(
  <App styles = { styles }/>,
  document.getElementById('react-app-root')
);

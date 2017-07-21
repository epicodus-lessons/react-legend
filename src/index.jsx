import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import styles from './components/app.css'

ReactDOM.render(
  <App styles = { styles }/>,
  document.getElementById('react-app-root')
);

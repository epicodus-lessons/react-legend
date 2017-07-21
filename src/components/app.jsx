import React from "react";
import ReactLogo from "./ReactLogo";

function App(props){
  console.log(props);
  return (
    <div className={props.styles.app.wrapper}>
      <header className={props.styles.app.header}>
        <h1>React Legend</h1>
      </header>
      <ReactLogo styles = {props.styles}/>
    </div>
  );
}

export default App;

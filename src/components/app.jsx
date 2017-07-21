import React from "react";

function App(props){
  console.log(props);
  return (
    <div className={props.styles.app}>
      <h1>React Legend</h1>
    </div>
  );
}

export default App;

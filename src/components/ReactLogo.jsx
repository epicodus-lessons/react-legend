import React from "react";

function ReactLogo(props){
  console.log(props);
  return (
    <div className={props.styles.reactLogo.wrapper}>
      <h4>react logo child</h4>
    </div>
  );
}

export default ReactLogo;

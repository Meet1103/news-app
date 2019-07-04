import React from 'react';

const Scroll = (props) => {
  return (
    <div style={ style }>
      {props.children}
    </div>
  )
}

const style ={
    position: "fixed",
    overflowY: "scroll",
    border: "2px solid rgba(0,0,0,0.3)", 
    maxHeight: "75%",
    minWidth: "100%"
}

export default Scroll;
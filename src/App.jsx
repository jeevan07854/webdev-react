import React, { useState } from "react"
// import Render from './Component/Render';
// import State from './Component/State'
// import Function from './Component/Function'
// import Hide_Show from './Component/Hide_Show'
// import Handlejson from "./Component/Handlejson"
import Coustomhook from "./Component/Coustomhook"
import Todo from "./Component/Todo"
const App = () => {
  // The useState hideShow is used to make a toogle in between button
  // const [hideShow ,setHideShow] =useState(true);

  //   const component = hideShow ? <Hide_Show/> :null;

  return (
    <>
      {/* <Function/> */}
      {/* <State/> */}
      <Coustomhook />
      {/* <button onClick={ ()=>setHideShow(s=>!s)}>Hide-Show</button>
       <br />
       <br />
       
        {component} */}
      {/* <Render/> */}
      {/* <Todo /> */}
      {/* <Handlejson /> */}
    </>
  )
}

export default App

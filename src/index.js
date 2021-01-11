import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import APP2 from './APP2';
import reportWebVitals from './reportWebVitals';
import TestFunction from './TestFunction';
import App3 from './App3';
import App4 from './App4';
import Baby from './Baby';
import Baby_new from './Baby_new';
import App from './App_ui';

const printMessage = () =>{
  document.getElementById('show-area').innerHTML='Who touch me! Come on';
}
const changeName = (newName)=>{
  name = newName.target.value;
  console.log("hey! mama"+name);
}
var name="Emily";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  //<TestFunction name={"Sidney"} handleClick = {printMessage}>Hi This is a test</TestFunction>,
  <div>
      <App></App>
      <div id="talk"></div>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

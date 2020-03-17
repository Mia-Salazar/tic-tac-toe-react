/*import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
*/

import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from './App';

// import i18n (needs to be bundled ;)) 
import './i18n';

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

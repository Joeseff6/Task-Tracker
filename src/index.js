import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import indexedDBMethods from "./helper/indexedDBMethods";

indexedDBMethods.openTasksDB();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
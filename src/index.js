import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <script src="/__/firebase/7.15.1/firebase-app.js"></script>
    <script src="/__/firebase/7.15.1/firebase-analytics.js"></script>
    <script src="/__/firebase/init.js"></script>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

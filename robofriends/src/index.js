import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
// Export default behöver inga klamrar runt sig. Endast en variabel som skall visas. Om man exporterar utan default (flera variabler) behövs klamrar.
// import { robots } from "./robots.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   
  <App />
  {/* <Card id={robots[0].id} name={robots[1].name} email={robots[2].email}/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

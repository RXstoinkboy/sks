import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "./i18n";
import { Loader } from "./atoms/loader/loader";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

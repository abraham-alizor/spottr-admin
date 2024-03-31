import "./index.css";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { persistor, Store } from "./states/store";

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement,
);
root.render(
  <PersistGate persistor={persistor}>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </PersistGate>,
);

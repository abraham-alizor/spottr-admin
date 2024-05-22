import "./index.css";

import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { queryClient } from "@/config";
import { DebitProvider } from "@/context/useContext";

import App from "./App";
import { persistor, Store } from "./states/store";

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement,
);
root.render(
  <PersistGate persistor={persistor}>
    <Provider store={Store}>
      <DebitProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </DebitProvider>
    </Provider>
  </PersistGate>,
);

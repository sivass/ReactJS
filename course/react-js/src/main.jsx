import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
// import { store } from "./reduxPlain/store.js";
import { store } from "./reduxToolKit/store.js"; // Uncomment this line to use Redux Toolkit

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

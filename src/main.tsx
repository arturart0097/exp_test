import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./app/provider/errorBoundary";
import { Provider } from "react-redux";
import { store } from "./app/provider/store/store";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>
);

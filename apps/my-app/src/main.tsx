import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@repo/ui";
import { store, reactRedux } from "@repo/redux";
import { BrowserRouter } from "react-router-dom";
const { Provider } = reactRedux;

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

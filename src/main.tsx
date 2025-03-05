import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "@mui/material/styles"
import App from "./App.tsx";
import "./index.css";
import theme from "./providers/theme/index.ts";


createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </Provider>
);

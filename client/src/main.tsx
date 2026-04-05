import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Check if the app was server-side rendered
const isSSR = rootElement.hasChildNodes();

if (isSSR) {
  // Hydrate for SSR
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  // Regular client-side rendering for development
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

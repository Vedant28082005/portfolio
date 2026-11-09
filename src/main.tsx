import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./app/AppRoutes.tsx";
import { normalizePath } from "./app/seo.ts";
import "./styles/index.css";

const container = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

// Hydrate only when the prerendered HTML is for this exact route (e.g. /admin falls back to the
// prerendered home page, which must be replaced rather than hydrated).
if (container.hasChildNodes() && container.dataset.route === normalizePath(location.pathname)) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

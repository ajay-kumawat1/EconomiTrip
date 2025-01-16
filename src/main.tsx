import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from "./create-trip/index.tsx";
import Header from "./components/custom/Header.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import Footer from "./components/custom/Footer.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_DOMAIN}
      clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Header />
      <Toaster />
      <RouterProvider router={router} />
      <Footer />
    </Auth0Provider>
  </StrictMode>
);

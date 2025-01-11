import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import MainLayout from "./layouts/MainLayout";
import HomePage from "./main/HomePage";
import Register from "./main/auth/Register";
import Login from "./main/auth/Login";
import Codec from "./main/Codec";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/codec" element={<Codec />} />
      </Route>
    )
  );

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;

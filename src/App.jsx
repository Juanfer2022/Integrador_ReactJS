import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Error404 from "./Errores/404";
import PajinaBuscarNoticias from "./Pajinas/PajinaBuscarNoticias";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PajinaBuscarNoticias />,
    errorElement: <Error404 />,
  },
  {
    path: "/buscador",
    element: <PajinaBuscarNoticias />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;

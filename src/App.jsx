import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Projeto from "./pages/Projeto";
import Menu from "./components/Menu";
import Criadores from "./pages/Criadores";
import Proposito from "./pages/Proposito";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Projeto />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/criadores",
    element: <Criadores />,
  },
  {
    path: "/proposito",
    element: <Proposito />,
  }

]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}
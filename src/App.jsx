import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Projeto from "./pages/Projeto";
import Menu from "./components/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Projeto />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },

]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}
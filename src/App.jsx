import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Home } from "./pages/Home.jsx"
import { Proposito } from "./pages/Proposito.jsx"
import { Projeto } from "./pages/Projeto.jsx"
import { Materiais } from "./pages/Materiais.jsx"
import { Agradecimentos } from "./pages/Agradecimentos.jsx"
import { Criadores } from "./pages/Criadores.jsx"
import { Feedback } from "./pages/Feedback.jsx"
import { theme } from "./styles/theme.js"
import { GlobalStyle } from "./styles/global.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/proposito",
    element: <Proposito />
  },
  {
    path: "/projeto",
    element: <Projeto />
  },
  {
    path: "/materiais",
    element: <Materiais />
  },
  {
    path: "/agradecimentos",
    element: <Agradecimentos />
  },
  {
    path: "/criadores",
    element: <Criadores />
  },
  {
    path: "/configuracoes",
    element: <Feedback />
  }
])

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

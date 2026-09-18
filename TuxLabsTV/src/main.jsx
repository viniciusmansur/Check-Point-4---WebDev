import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import App from './App'
import ListasPage from './pages/ListasPage'
import ContatoPage from './pages/ContatoPage'
import PageNotFound from './pages/PageNotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <PageNotFound/>
  },
  {path: "listas", element: <ListasPage/>},
  {path: "contato", element: <ContatoPage />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

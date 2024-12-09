import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import Error from './Components/Error.jsx';
import Settings from './Components/Settings.jsx';
import MainSection from './Components/MainSection.jsx';
import Invoices from './Components/Invoices.jsx';

const root = createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainSection />
      },
      {
        path: "/invoices",
        element: <Invoices />
      },
      {
        path: "/settings",
        element: <Settings/> 
      },
    ]
  },
])

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import DocumentPreview from './Components/DocumentPreview.jsx';

const root = createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/preview",
    element: <DocumentPreview/>
  }
])

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

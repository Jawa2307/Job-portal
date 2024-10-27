
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)

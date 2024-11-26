import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
// import { Connect } from 'vite';
import Contact from './components/About/Contact/Contact';
// import Home from './components/Home/Home';
import Home from './components/Home/Home';
const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home></Home>
    element:<Home></Home>,
  Children:[

    {
      path:"/about",
      element:<About></About>
    },
  
    {
  
      path:"/contact",
      element:<Contact></Contact>
    }

  ]
},

 
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />

  </StrictMode>,
)

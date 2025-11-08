import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Components/Home/Home';
import About_Us from './Components/Abouts Us/About_Us';
import CategoryProducts from './Components/CategoryProducts/CategoryProducts';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ContactUs from './Components/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About_Us></About_Us>
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: "category/:categoryName",
        element: <CategoryProducts></CategoryProducts>
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)

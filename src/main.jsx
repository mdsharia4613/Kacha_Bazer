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
import Offer from './Components/Offer/Offer';
import Policy from './Components/Policy/Policy';
import Terms from './Components/Trems/Terms';
import Login from './pages/Login';
import UserProvider from './UserContext';
import AuthLayout from './AuthLayout';
import UserProfile from './Components/userprofile/UserProfile';

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
        path: "/offers",
        element: <Offer></Offer>
      },
      {
        path: "/policy",
        element: <Policy></Policy>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
      {
        path: "category/:categoryName",
        element: <CategoryProducts></CategoryProducts>
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "userprofile",
        element: <UserProfile></UserProfile>
      }
     
    ]
  },

  // 🔥 LOGIN PAGE OUTSIDE ROOT LAYOUT
  {
    path: "/login",
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>

  </StrictMode>,
)

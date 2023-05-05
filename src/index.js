import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App from './App';
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { Products } from './pages/Products';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


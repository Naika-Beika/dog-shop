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
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { User } from './pages/User';
import { CurrentCard } from './pages/CurrentCard';

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
        path: 'products/:id',
        element: <CurrentCard />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'user',
        element: <User />
      },
    ]
  }
])
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);


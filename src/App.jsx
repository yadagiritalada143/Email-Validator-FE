import './App.css'
import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import MiniDrawer from './components/outbox'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/home",
    element: <Dashboard />
  },
  {
    path: "/outbox",
    element: <MiniDrawer/>
  }
]);
const App = () => {
  return (<>
    <RouterProvider router={routes}></RouterProvider>
    <ToastContainer />
  </>
  )
}

export default App

import './App.css'
import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Sidebar from './components/drawer'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import Dashboard from './components/Dashboard'
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
  // {
  //   path: "/home",
  //   element: <Dashboard />
  // },
  {
    path: "/emailvalidator",
    element: <Sidebar />
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

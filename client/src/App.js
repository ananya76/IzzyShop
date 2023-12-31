import React from 'react'
import{
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"
import Products from "./pages/Products/Products"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import "./App.scss"

const Layout = ()=>{
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/products/:id",
        element: <Products></Products>
      },
      {
        path:"/product/:id",
        element: <Product></Product>
      }
    ]
  }

])

const App = () => {
  return (

    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  )
}

export default App
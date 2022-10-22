import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import ErrorPage from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateAuth from "./PrivateAuth";
  export const router = createBrowserRouter([
   {
    path:'/',
    element: <Main/>,
    children:[
        {
            path:'/',
            loader: async()=>{
              return fetch('https://news-severs-cristain333.vercel.app/news')
            },
            element:<Home/>
        },
        {
          path:'/category/:id',
          loader: async ({params}) => {
            return fetch(`https://news-severs-cristain333.vercel.app/category/${params.id}`);
          },
          element:<Category/>
        },
        {
          path:'/news/:id',
          loader:async ({params})=>{
            return fetch(`https://news-severs-cristain333.vercel.app/news/${params.id}`)
          },
          element: <PrivateAuth><News/></PrivateAuth>
        },
        {
          path:'/login',
          element: <Login/>
        },{
          path:'/singup',
          element:<SingUp/>
        }
    ]
   },
   {
    path:'*',
    element:<ErrorPage/>
    
   }
  ]);
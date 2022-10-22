  import React from 'react'
  import {
    RouterProvider,
  } from "react-router-dom";
  import { router } from "./Routes/Routes.jsx";
  import UserContext from './Contexts/UserContext.jsx';
  const App = () => {
    return (
      <div>
      <UserContext>
<RouterProvider router={router}></RouterProvider>
      </UserContext>
      </div>
    )
  }
  
  export default App

import React from 'react'
import './main.css'
import { Outlet } from 'react-router-dom'
import Leftside from '../Shared/LeftSide/Leftside'
import RightSide from '../Shared/RightSide/RightSide'
import Header from '../Shared/Navbar/Header'
const Main = () => {
  return (

    <>
    <Header></Header>
    <div className='mainDiv'>
      <div className="leftSide d-none d-lg-block">
        <Leftside></Leftside>
      </div>
      <div className="main">
      <Outlet></Outlet>
      </div>
      <div className="rightSide">

<RightSide></RightSide>
      </div>
    </div>
    </>
  )
}

export default Main

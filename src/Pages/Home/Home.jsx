import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Newscard from '../../Shared/NewsCard/Newscard';

const Home = () => {
    const data =  useLoaderData();
  return (
    <>
    {
        data.map(news=>{
           return(
            <Newscard key={news._id} news={news}/>
           )
        })
    }
    </>
  )
}

export default Home
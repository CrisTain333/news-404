import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Newscard from '../../Shared/NewsCard/Newscard'
const Category = () => {
    const newsData = useLoaderData()
    
  return (
    <div>
        {
            newsData.map(news =>{
                return(
                    
                    <Newscard key={news._id} news={news}/>
                    
                )
            })
        }
    </div>
  )
}

export default Category
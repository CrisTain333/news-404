import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

const News = () => {
    const data = useLoaderData()
      
    

  return (
    <>
    <div className="mt-3">
      <Card sx={{ maxWidth: 650 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={data.author.img}>
             
            </Avatar>
          }
          action={<ShareIcon />}
          title={data.author.name}
          subheader={data.author.published_date}
        />

        <Typography variant="h6" className="text-center" component="div">
          {data.title}
        </Typography>
        <CardMedia
          component="img"
          className="p-1 "
          height="350"
          image={data.image_url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {data.details}
          </Typography>
        </CardContent>

        
          <div className="d-flex p-2">
          </div>
          <div className="d-flex p-2 justify-content-between">
            <div>
            <Typography variant="subtitle1" color="text.secondary"><StarIcon/>{data.rating.number}
          </Typography>
            </div>
            <div>
            <Typography variant="subtitle1" color="text.secondary"><RemoveRedEyeIcon/>{data.total_view}
          </Typography>
            </div>
          </div>
       
      </Card>
    </div>



    </>
  )
}

export default News
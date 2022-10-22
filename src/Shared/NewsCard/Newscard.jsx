import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

const Newscard = (props) => {
  const {  image_url , title , details , author , total_view , rating ,_id} = props.news;
  return (
    <div className="mt-3">
      <Card sx={{ maxWidth: 650 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={author.img}>
             
            </Avatar>
          }
          action={<ShareIcon />}
          title={author.name}
          subheader={author.published_date}
        />

        <Typography variant="h6" className="text-center" component="div">
          {title}
        </Typography>
        <CardMedia
          component="img"
          className="p-1 "
          height="350"
          image={image_url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {details?.slice(0,250)} .... <Link to={`/news/${_id}`}>Read More</Link>
          </Typography>
        </CardContent>

        
          <div className="d-flex p-2">
          </div>
          <div className="d-flex p-2 justify-content-between">
            <div>
            <Typography variant="subtitle1" color="text.secondary"><StarIcon/>{rating.number}
          </Typography>
            </div>
            <div>
            <Typography variant="subtitle1" color="text.secondary"><RemoveRedEyeIcon/>{total_view}
          </Typography>
            </div>
          </div>
          
        
       
      </Card>
     
    </div>
  );
};

export default Newscard;

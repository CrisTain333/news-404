import React, { useState, useEffect } from "react";
import "./leftside.css";
import { Link } from "react-router-dom";
const Leftside = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://news-severs-cristain333.vercel.app/news-categories")
      .then((res) => res.json())
      .then((cetagoryData) => setData(cetagoryData));
  }, []);
  return (
    <div className="CategoryDiv">
      <h4>All Category</h4>
      <div className="mt-3 linkDiv">{data.map(e=>{
        return(
         <p key={e.id}><Link to={`/category/${e.id}`} >{e.name}</Link></p>
        )
      })}</div>
    </div>
  );
};

export default Leftside;

import React from "react";
//import './App.css'
import {useState} from 'react';


const GetPttBeauty = () => {
    const [picUrl, setPicUrl] = useState("https://i.imgur.com/yqB1Ifi.jpg");


    const handleClick = () => {

        fetch("https://pttbeauty-restful.onrender.com/api/images/random/") //https://pttbeauty-restful.onrender.com/api/images/random/
        .then(data => data.json())
        .then(response => {
          const { id, Url } = response;
          console.log(id);
          console.log(Url);
          
          setPicUrl(Url);
        });  
};

return (
    <div  align="center">
      <h1>PTT表特</h1>
      <div className="meme-form"  align="center">  
        <button onClick={handleClick}>亂數選擇</button>
      </div>
      <div className="meme"  align="center">

        <img src={picUrl} alt="" />

      </div>
     
    </div>
  );
};
export default GetPttBeauty;
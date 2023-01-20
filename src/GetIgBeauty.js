import React from "react";
import './App.css'
import {useState} from 'react';


const GetIgBeauty = () => {
    const [picUrl, setPicUrl] = useState("https://i.imgur.com/yqB1Ifi.jpg");


    const handleClick = () => {

        fetch("https://igbeauty-restful.onrender.com/api/images/random/") //https://pttbeauty-restful.onrender.com/api/images/random/
        .then(data => data.json())
        .then(response => {
          const { id, Url } = response;
          console.log(id);
          console.log(Url);
          
          setPicUrl(Url);
        });  
};

return (
    <div>
      <div className="meme-form">  
        <button onClick={handleClick}>IG網美亂數選擇</button>
      </div>
      <div className="meme">

        <img src={picUrl} alt="" />

      </div>
     
    </div>
  );
};
export default GetIgBeauty;
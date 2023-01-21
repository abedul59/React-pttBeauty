import React from "react";
//import './App.css'
import {useState} from 'react';


const GetPttBeauty = () => {
    const [picUrl, setPicUrl] = useState("https://i.imgur.com/ct87djV.jpg");


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
    <div>
      <h1>PTT表特</h1>
      <div className="meme-form">  
        <button onClick={handleClick}>亂數選擇</button>
      </div>
      <div className="meme">

        <img src={picUrl} alt="" />

      </div>
     
    </div>
  );
};
export default GetPttBeauty;
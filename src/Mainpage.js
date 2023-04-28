import React from "react";
import './App.css'
import GetPttBeauty from './GetPttBeauty'
import GetIgBeauty from './GetIgBeauty'

const Mainpage = () => {

return (
    <div align="center">
     <h1>主頁</h1>   
     <h3>伺服器若一段時間沒使用就會沉睡，若第一次喚醒則需要30秒，請耐心等待。</h3>
     <h3>建議按亂數選擇一次喚醒，等2-3秒，再按第二次，勿按太多次以免當掉。</h3>
     <h3>若圖片顯示不存在，表示久未使用而遭刪除，請再按一下亂數選擇即可。</h3>
     <h3>若訂閱則提供line機器人服務，可下載圖片。可加line id詢問細節或蝦皮聊聊。</h3>
     <h3>line id: twstock168</h3>
     <h3>官方IG: ig.beauty.portal168</h3>
        </div>
  );
};

export default Mainpage;
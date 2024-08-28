import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';


  


function App() {
    
  const[first,setfirst]=useState([])
const data=()=>
{
  
  axios.get("https://api.openweathermap.org/data/2.5/weather?q=coimbatore&units=metric&appid=30a8fc35efd791209d3023cd693f7280")
  .then((res)=>setfirst(res.data.main)).catch((error)=>console.log(error))
  
}
console.log(first);
}
 return(
  <div>
    
  <h1>weather data</h1>
  <div class="body">
     
    <div class="container">
       <div class="j">
         <p>coimbatore</p>
       </div>
        <div class="fade-in">
        <img src="/img/cloud.jpg"  class="center"></img>
        
        
        </div>
        <div class="h1"> 
         
         <h1 align="center" >Weather data</h1>
         </div>
         <div class="p fade-in h">
         <p align="center">Temperature:   {first.temp}</p>   
         <p align="center"> Humidity:    {first.humidity}</p>
         <p align="center">Pressure:     {first.pressure}</p>
         <p align="center">Ground Level: {first.grnd_level}</p>
         <p align="center">Sea level:    {first.sea_level}</p></div>
         <div align="center" class="button">
         <button onClick={data} >Getdata</button></div>
       </div>  
  </div>
          

       
        
      
      
  );

export default App;

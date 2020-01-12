import React, { useState, useEffect } from 'react';
// import LocationSearch from './LocationSearch';
import './App.css';

export default () => {
  //////////set lat and lang here/////////////
  const lat = 29.7604;
  const lng = 95.3698;
  const errorMsg = "Something is wrong! Please try again!"
  const [WD, setWD] = useState({});
  const [Temp, setTemp] = useState({});
  const [Area, setArea] = useState({});
  //set state
  // const[lat,lng, setLat,setLng] = useState({});

  useEffect( () => {
    getWeatherInfo();
  }, [lat,lng]);
  

  // const { main, wind } = getWeatherInfo;
//fetch weather info

const getWeatherInfo = async () => {
  const key = '78e53423530c1dd56211cd3d8b5a38a7';
  const getData = await fetch(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=1&appId=${key}`);
  const dataObj = await getData.json();
  console.log(dataObj);
  if(dataObj.cod === "200"){
    setWD(dataObj.list[0].weather[0]);
    setTemp(dataObj.list[0].main);
    setArea(dataObj.list[0]);
    
  }else{
    alert(errorMsg);
  }
}
//console.log(WD.weather[0]);

console.log(WD.main);

// const temparature = () => {
//   return <div >{KtoC(Temp.temp)+"C"}</div>
// }




const KtoC = number => {
  if ((number - 273.15) % 1 === 0) {
    return number - 273.15;
  }
  return Number(number - 273.15).toFixed(2);
};
console.log(KtoC(Temp.temp));
const imageUpdate =  () =>{
  if(WD.main === "Clouds"){
    return <div className="outerBoxCloudy">Cloudy
    <div className="tempD">{KtoC(Temp.temp)+"C"}</div>
    <div className="tempDs">{WD.description}</div>  
    <div className="tempDs">Weather of {Area.name}</div>       
      </div>
  }
  if(WD.main === "Clear"){
    return <div className="outerBoxSunny">Sunny
    
    <div className="tempD">{KtoC(Temp.temp)+"C"}</div>
    <div className="tempDs">Weather is {WD.description}</div>
    <div className="tempDs">Weather of {Area.name}</div>
    </div>
  }
  if(WD.main === "Mist"){
    return <div className="outerBoxMist">Mist
    
    <div className="tempD">{KtoC(Temp.temp)+"C"}</div>
    <div className="tempDs">Weather is {WD.description}</div>
    <div className="tempDs">Weather of {Area.name}</div>
    </div>
  }
} 



  return (
    <div className ="main">
    <div>
      <div></div>
      <div>{imageUpdate()}</div>
      <div>Please update latitude and longitude manually! </div>
      {/* <div>{temparature()}</div> */}
      {/* <div><LocationSearch /></div> */}
    </div>
    </div>
  )
}

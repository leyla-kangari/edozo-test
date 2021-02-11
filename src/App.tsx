import React, { useEffect, useState } from 'react';
import { GlobalStyle, Wrapper } from './App.style';
import DailyWeather from './component/daily/Daily';
import CurrentWeather from './component/current/Current';
import axios from 'axios';

 const App = () => {

  const [ data, setData ] = useState({
    current: {
      weather: [{
        description: "",
        icon: "",
        id: 0,
        main: ""
      }]
    },
    daily: [{
      dt: "",
      weather: [{
        description: "",
        icon: "",
        id: 0,
        main: ""
      }],
      temp: {
        min: 0,
        max: 0,
      }
    }],
    lat: 0,
    lon: 0,
    timezone: "",
    timezone_offset: 0
  });
  const getData = async () => {  
    await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=51.509865&lon=-0.118092&exclude=minutely,hourly,minutley&appid=b5d64f004e6f4a0634982f88d9e3feb5")  
    .then(res => {  
      setData(res.data)  
    })  
    .catch(err => {  
      console.log(err)  
    });  
  } 
  useEffect(() => {
    getData() 
},[]);

  return (
  <>
      <GlobalStyle/>
      <Wrapper>
        <CurrentWeather current={data.current} timezone= {data.timezone}/>
        <DailyWeather daily= {data.daily} />
    </Wrapper>
  </>
  );
}

export default App;

import React, { useCallback } from 'react';
import { GridContainer, GridItem } from './Daily.style' 

const DailyWeather = (prop: any) => {

  const getDayName = useCallback(
     (currentDate: any) => {
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dt = new Date(currentDate * 1000);
      return days[dt.getDay()];
    },
    [],
  );
  
  return (
  <GridContainer>
    {prop.daily.map((day:any) => (
        <GridItem key={day.dt}>
          <p>{getDayName(day.dt)}</p>
          {
            day.weather[0].icon !== "" ? 
              <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt={day.dt}/>
            : null
          }
          <p>{day.temp.max}</p>
          <span>
          {day.temp.min}
          </span>
        </GridItem>
      )
    )}
  </GridContainer>
  );
}

export default DailyWeather;

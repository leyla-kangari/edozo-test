import React from 'react';
import { Wrapper } from './Current.style';

const CurrentWeather = (prop: any) => {
  return (
    <>
      <Wrapper>
        <h2 data-testid="not-empty-city">
          {prop.timezone}
        </h2>
        {
          prop.current.weather[0].icon !== "" ? 
        <img src={`http://openweathermap.org/img/w/${prop.current.weather[0].icon}.png`} alt={prop.timezone} />
: null
        }
        <h1>
          {prop.current.temp} 
        </h1>
      </Wrapper>
    </>
  );
}

export default CurrentWeather;

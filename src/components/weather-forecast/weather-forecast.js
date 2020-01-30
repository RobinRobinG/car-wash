import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from '../Collapsible/Collapsible'
import './weather-forecast.scss'

function getDate(dt_txt) {
  return dt_txt.split(' ')[0]
}

function renderTableRow(item) {
  const { dt_txt, weather, main } = item
  const { main: dailyWeather, icon } = weather[0]
  const { temp, feels_like, humidity } = main

  return (
    <tr key={dt_txt}>
      <td>{getDate(dt_txt)}</td>
      <td>{dailyWeather}</td>
      <td>{temp}</td>
      <td>{feels_like}</td>
      <td>{humidity}</td>
      <td className="weather-icon">
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="weather icon"
        />
      </td>
    </tr>
  )
}

function renderWeatherList(list) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Weather</th>
          <th>Temperature</th>
          <th>Feels Like</th>
          <th>Humidity (%)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {list
          .filter((item, index) => {
            if (index % 8 === 0) {
              return item
            }
            return null
          })
          .map(renderTableRow)}
      </tbody>
    </table>
  )
}

const WeatherForecast = ({ weather }) => {
  if (!weather.cod) {
    return <div>Loading...</div>
  }
  const { city, list } = weather
  const { name } = city

  return (
    <div className="weather-forecast">
      <Collapsible title="Weather Forecast">
        <h4 className="location">
          {name} weather forecast for the next 5 days
        </h4>
        {renderWeatherList(list)}
      </Collapsible>
    </div>
  )
}

WeatherForecast.propTypes = {
  weather: PropTypes.object
}

export default WeatherForecast

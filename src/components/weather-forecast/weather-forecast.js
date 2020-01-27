import React from 'react'
import PropTypes from 'prop-types'
import './weather-forecast.scss'

function getDate(dt_txt) {
  return dt_txt.split(' ')[0]
}

function renderTableRow(item) {
  const { dt_txt, weather } = item
  const { main, description } = weather[0]
  return (
    <tr key={dt_txt}>
      <td>{getDate(dt_txt)}</td>
      <td>{main}</td>
      <td>{description}</td>
    </tr>
  )
}

function renderWeatherList(list) {
  return (
    <table>
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
    return <div>'Loading...'</div>
  }
  const { city, list } = weather
  const { name } = city

  return (
    <div className="weather-forecast">
      <div className="container">
        <h4 className="location">
          {name} weather forecast for the next 5 days
        </h4>
        {renderWeatherList(list)}
      </div>
    </div>
  )
}

WeatherForecast.propTypes = {
  weather: PropTypes.object,
}

export default WeatherForecast

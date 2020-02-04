import React from 'react'
import PropTypes from 'prop-types'
import Container from '../container/container'
import DailyForecast from '../daily-forecast/daily-forecast'
import './weather-forecast.scss'

function renderWeatherList(list) {
  return (
    <div className="five-day-forecast">
      {list
        .filter((item, index) => {
          if (index % 8 === 0) {
            return item
          }
          return null
        })
        .map(item => (
          <DailyForecast key={item.dt_txt} dailyForecast={item} />
        ))}
    </div>
  )
}

const WeatherForecast = ({ fiveDayWeatherData }) => {
  if (fiveDayWeatherData.cod !== '200') {
    return <div className="weather-forecast"></div>
  }
  const { list } = fiveDayWeatherData

  return (
    <div className="weather-forecast">
      <Container>
        <h4>Next 5 days</h4>
        {renderWeatherList(list)}
      </Container>
    </div>
  )
}

WeatherForecast.propTypes = {
  weatherData: PropTypes.object
}

export default WeatherForecast

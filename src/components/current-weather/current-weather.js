import React from 'react'
import Container from '../container/container'
import './current-weather.scss'
import { fromUnixTime, format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThermometerHalf,
  faWind,
  faTint,
  faEye,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons'
import CurrentWeatherElement from '../current-weather-element/current-weather-element'

function getTimeFromUnix(unixTime) {
  return format(fromUnixTime(unixTime), 'hh:mm')
}

function sentenceCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function renderDetails(item) {
  const { label, data, unit, icon } = item

  return (
    <CurrentWeatherElement key={label}>
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="label">{label}</div>
      <div className="number">
        {data} {unit}
      </div>
    </CurrentWeatherElement>
  )
}

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData.cod) {
    return <div>Loading...</div>
  }
  const { weather, main, visibility, wind, sys } = weatherData
  const { icon, description } = weather[0]
  const { temp, feels_like, humidity } = main
  const { sunrise, sunset } = sys
  const weatherDetails = [
    {
      label: 'Feels like',
      data: Math.floor(feels_like),
      unit: '°F',
      icon: faThermometerHalf
    },
    {
      label: 'Wind',
      data: wind.speed,
      unit: 'ml/h',
      icon: faWind
    },
    {
      label: 'Humidity',
      data: humidity,
      unit: '%',
      icon: faTint
    },
    {
      label: 'Visibility',
      data: visibility,
      unit: 'm',
      icon: faEye
    },
    {
      label: 'Sunrise',
      data: getTimeFromUnix(sunrise),
      unit: 'am',
      icon: faSun
    },
    {
      label: 'Sunset',
      data: getTimeFromUnix(sunset),
      unit: 'pm',
      icon: faMoon
    }
  ]

  return (
    <div className="current-weather">
      <Container>
        <h4>Today's weather forecast</h4>
        <div className="weather-details">
          <div className="left">
            <i className={`owi owi-${icon}`} />
            <div className="temp-and-description">
              <div className="temp">{Math.floor(temp)} °F</div>
              <div className="description">{sentenceCase(description)}</div>
            </div>
          </div>
          <div className="right">
            {weatherDetails.map(item => {
              return renderDetails(item)
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CurrentWeather

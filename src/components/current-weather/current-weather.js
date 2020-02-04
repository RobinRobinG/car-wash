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

function convertMeterToMile(value) {
  return Math.floor(value / 1609)
}

function getTimeFromUnix(unixTime) {
  return format(fromUnixTime(unixTime), 'h:mm')
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
        {data}
        <span> {unit}</span>
      </div>
    </CurrentWeatherElement>
  )
}

const CurrentWeather = ({ currentWeatherData, fiveDayWeatherData }) => {
  if (currentWeatherData.cod !== '200' && fiveDayWeatherData.cod !== '200') {
    return null
  }
  
  const { weather, main, visibility, wind, sys } = currentWeatherData
  const { icon, description } = weather[0]
  const { temp, feels_like, humidity } = main
  const { sunrise, sunset } = sys
  const {
    city: { name }
  } = fiveDayWeatherData
  const weatherDetails = [
    {
      label: 'Feels like',
      data: Math.floor(feels_like),
      unit: '°',
      icon: faThermometerHalf
    },
    {
      label: 'Wind',
      data: wind.speed,
      unit: 'mph',
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
      data: convertMeterToMile(visibility),
      unit: 'mi',
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
        <h4>Today's weather forecast for {name}</h4>
        <div className="weather-details">
          <div className="left">
            <i className={`owi owi-${icon}`} />
            <div className="temp-and-description">
              <div className="temp">{Math.floor(temp)}°</div>
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

import React from 'react'
import { format, parseISO } from 'date-fns'
import './daily-forecast.scss'

function renderTemp(main) {
  const { temp, feels_like } = main
  const dailyTemp = Math.floor(temp)
  const feelsLike = Math.floor(feels_like)
  return (
    <div className="min-max-temp">
      <div className="max-temp">{dailyTemp} °</div>
      <div className="min-temp">{feelsLike} °</div>
    </div>
  )
}

function renderWeatherIcon(icon) {
  return (
    <div className="weather-icon">
      <i className={`owi owi-${icon}`} />
    </div>
  )
}

function renderRainVolume(rain) {
  const { '3h': value } = rain
  return (
    <div className="rain-volume">
      <div className="value">{value} mm</div>
    </div>
  )
}

function getDate(date) {
  return format(parseISO(date), 'MMM d')
}

function renderDate(date) {
  const formatedDate = getDate(date)
  return <div className="date">{formatedDate}</div>
}

function getDateOfWeek(date) {
  return format(parseISO(date), 'eee').toUpperCase()
}

function renderDateOfWeek(date) {
  const formatedWeek = getDateOfWeek(date)
  return <div className="week">{formatedWeek}</div>
}

const DailyForecast = ({ dailyForecast }) => {
  const { dt_txt, rain, weather, main } = dailyForecast
  const date = dt_txt.split(' ')[0]
  const { icon } = weather[0]

  return (
    <div className="daily-forecast">
      {renderDateOfWeek(date)}
      {renderDate(date)}
      {rain ? renderRainVolume(rain) : <div className="rain-volume"></div>}
      {renderWeatherIcon(icon)}
      {renderTemp(main)}
    </div>
  )
}

export default DailyForecast

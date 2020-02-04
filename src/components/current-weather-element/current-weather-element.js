import React from 'react'
import classNames from 'classnames'
import './current-weather-element.scss'

const CurrentWeatherElement = ({ children, className }) => {
  return (
    <div className={classNames(className, 'current-weather-element')}>
      {children}
    </div>
  )
}

export default CurrentWeatherElement

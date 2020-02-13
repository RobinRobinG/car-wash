import React from 'react'
import './gradient-background.scss'

function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

const GradientBackground = ({ currentTemperature, children }) => {
  const temperatureInCelsius = convertFahrenheitToCelsius(currentTemperature)

  let gradientColor
  if (temperatureInCelsius <= 4) {
    gradientColor = 'blue-gray'
  } else if (temperatureInCelsius <= 20 && temperatureInCelsius > 4) {
    gradientColor = 'blue-yellow'
  } else if (temperatureInCelsius <= 31 && temperatureInCelsius > 20) {
    gradientColor = 'orange-yellow'
  } else {
    gradientColor = 'purple-red'
  }

  return (
    <div className={`gradient-background ${gradientColor}`}>{children}</div>
  )
}

export default GradientBackground

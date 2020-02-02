import { useState, useEffect } from 'react'
import { usePosition } from './usePosition'

const useCurrentWeatherForecast = () => {
  const { latitude = 47, longitude = 122 } = usePosition()
  const [currentWeather, setCurrentWeather] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getWeatherData() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${process.env.GATSBY_OPEN_WEATHER_MAP_API_KEY}&units=imperial`
        )
        const json = await response.json()
        setCurrentWeather(json)
      } catch (error) {
        setError(error)
      }
    }

    getWeatherData()
  }, [latitude, longitude])

  return { weatherData: currentWeather, error }
}

export default useCurrentWeatherForecast

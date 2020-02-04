import { useState, useEffect } from 'react'
import { usePosition } from './usePosition'

const useCurrentWeatherForecast = () => {
  const { latitude, longitude } = usePosition()
  const [currentWeatherData, setCurrentWeatherData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getWeatherData() {
      if (!latitude || !longitude) {
        return
      }

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${process.env.GATSBY_OPEN_WEATHER_MAP_API_KEY}&units=imperial`
        )
        const json = await response.json()
        setCurrentWeatherData(json)
      } catch (error) {
        setError(error)
      }
    }
    getWeatherData()
  }, [latitude, longitude])

  return { currentWeatherData, error }
}

export default useCurrentWeatherForecast

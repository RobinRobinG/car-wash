import { useState, useEffect } from 'react'
import { usePosition } from './usePosition'

const useFiveDayWeatherForecast = () => {
  const { latitude, longitude } = usePosition()
  const [fiveDayWeatherData, setFiveDayWeatherData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getWeatherData() {
      if (!latitude || !longitude) {
        return
      }

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${process.env.GATSBY_OPEN_WEATHER_MAP_API_KEY}&units=imperial`
        )
        const json = await response.json()
        setFiveDayWeatherData(json)
      } catch (error) {
        setError(error)
      }
    }

    getWeatherData()
  }, [latitude, longitude])

  return { fiveDayWeatherData, error }
}

export default useFiveDayWeatherForecast

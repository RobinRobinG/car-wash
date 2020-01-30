import { useState, useEffect } from 'react'
import { usePosition } from '../custom-hooks/usePosition'

export const useWeather = () => {
  const { latitude = 35, longitude = 139 } = usePosition()
  const [weather, setWeather] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getWeatherData() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${process.env.GATSBY_OPEN_WEATHER_MAP_API_KEY}`
        )
        const json = await response.json()
        setWeather(json)
      } catch (error) {
        setError(error)
      }
    }

    getWeatherData()
  }, [latitude, longitude])

  return { weather, error }
}

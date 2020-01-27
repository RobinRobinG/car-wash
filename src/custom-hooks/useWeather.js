import { useState, useEffect } from 'react'
import { usePosition } from '../custom-hooks/usePosition'

export const useWeather = () => {
  const { latitude = 35, longitude = 139 } = usePosition()
  const [weather, setWeather] = useState({})
  const [error, setError] = useState(null)
  const APIKEY = '25498ee93d547abde3728a35ba391ad6'

  useEffect(() => {
    async function getWeatherData() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}`
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

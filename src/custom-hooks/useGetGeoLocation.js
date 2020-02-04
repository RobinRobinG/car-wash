import { useState, useEffect } from 'react'
import { usePosition } from './usePosition'

const useGetGeoLocation = () => {
  const { latitude, longitude } = usePosition()
  const [city, setCity] = useState({})

  useEffect(() => {
    async function getCityData() {
      if (!latitude || !longitude) {
        return
      }

      const geoDbGetCitiesUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=1&location=${latitude}${longitude}&radius=50`

      const headers = {
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        'x-rapidapi-key': process.env.X_RapidAPI_Key
      }

      const fetchOptions = {
        method: 'GET',
        headers
      }

      const response = await fetch(geoDbGetCitiesUrl, fetchOptions)
      const json = await response.json()
      const { data } = json
      setCity(data[0].city)
    }

    getCityData()
  }, [latitude, longitude])

  return { city }
}

export default useGetGeoLocation

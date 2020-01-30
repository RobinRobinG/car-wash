import { useState, useEffect } from 'react'
import { usePosition } from './usePosition'

export const useCarwash = () => {
  const { latitude = 35, longitude = 139 } = usePosition()
  const [nearByCarwash, setNearByCarwash] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getNearByCarwashInfo() {
      try {
        // const response = await fetch(
        //   `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=carwash&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@${latitude},${longitude}&key=${process.env.GOOGLE_PLACE_API_KEY}`
        // )

        const json = await response.json()
        setNearByCarwash(json)
      } catch (error) {
        setError(error)
      }
    }

    getNearByCarwashInfo()
  }, [latitude, longitude])

  return { nearByCarwash, error }
}

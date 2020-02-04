import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import useFiveDayWeatherForecast from '../custom-hooks/useFiveDayWeatherForecast'
import useCurrentWeatherForecast from '../custom-hooks/useCurrentWeatherForecast'
import Header from '../components/header/header'
import Main from '../components/main/main'
import WeatherForecast from '../components/weather-forecast/weather-forecast'
import CurrentWeather from '../components/current-weather/current-weather'
import Footer from '../components/footer/footer'
import 'open-weather-icons/dist/css/open-weather-icons.css'
import './index.css'

function getResult(weather) {
  const { list } = weather
  if (!list) {
    return 'Loading...'
  }

  let result = 'Yes'
  for (let i = 0; i < list.length; i++) {
    const item = list[i].weather[0].main
    if (item === 'Rain' || item === 'Snow' || item === 'Extreme') {
      result = 'No'
      break
    }
  }

  return result
}

const IndexPage = () => {
  const { fiveDayWeatherData } = useFiveDayWeatherForecast()
  const { currentWeatherData } = useCurrentWeatherForecast()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="site-container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main result={getResult(fiveDayWeatherData)} />
      <CurrentWeather
        fiveDayWeatherData={fiveDayWeatherData}
        currentWeatherData={currentWeatherData}
      />
      <WeatherForecast fiveDayWeatherData={fiveDayWeatherData} />
      <Footer />
    </div>
  )
}

export default IndexPage

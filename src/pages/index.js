import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useWeather } from '../custom-hooks/useWeather'
import Header from '../components/header/header'
import Main from '../components/main/main'
import WeatherForecast from '../components/weather-forecast/weather-forecast'
import Footer from '../components/footer/footer'
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
  const { weather } = useWeather()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log({ weather })

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main result={getResult(weather)} />
      <WeatherForecast weather={weather} />
      <Footer />
    </div>
  )
}

export default IndexPage

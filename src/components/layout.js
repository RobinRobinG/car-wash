import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useWeather } from '../custom-hooks/useWeather'
import Header from './header/header'
import Main from './main/main'
import WeatherForecast from './weather-forecast/weather-forecast'
import Footer from './footer/footer'
import './layout.css'

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

function Layout() {
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
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main result={getResult(weather)} />
      <WeatherForecast weather={weather} />
      <Footer />
    </Fragment>
  )
}

export default Layout

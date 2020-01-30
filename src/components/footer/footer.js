import React from 'react'
import Container from '../container/container'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <Container>
        <p className="definition">
          Definition of when to get a car wash: Five consecutive days with no
          precipitation.
        </p>
        <p>
          © {new Date().getFullYear()}, Created by
          {` `}
          <a href="https://robinrobing.github.io/">Robin Guan</a>
        </p>
        <p>
          Powered by <a href="https://openweathermap.org/">OpenWeather</a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer

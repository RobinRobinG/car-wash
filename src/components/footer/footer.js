import React from 'react'
import Container from '../container/container'
import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="definition">
          Definition of when to get a car wash: Five consecutive days with no
          precipitation.
        </div>
        <div>
          © {new Date().getFullYear()}, Created by
          {` `}
          <a href="https://robinrobing.github.io/">Robin Guan</a>
        </div>
        <div>
          Powered by <a href="https://openweathermap.org/">OpenWeather</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

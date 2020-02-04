import React from 'react'
import Container from '../container/container'
import './footer.scss'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <div className="definition">
          Definition of when to get a car wash: Five consecutive days with no
          precipitation.
        </div>
        <div>© {year}</div>
        <div>
          Powered by <a href="https://openweathermap.org/">OpenWeather</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

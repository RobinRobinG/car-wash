import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Container from '../container/container'
import TodayDate from '../today-date/today-date'
import Logo from '../../assets/logo.svg'
import './header.scss'

const Header = ({ siteTitle, city }) => {
  console.log({ city })
  return (
    <header className="header">
      <Container>
        <Link to="/" className="link">
          <div className="logo">
            <Logo />
          </div>
          <h1>{siteTitle}</h1>
        </Link>
        <div className="city-and-date">
          <div>{city}</div>
          <TodayDate />
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header

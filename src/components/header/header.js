import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../../assets/logo.svg'
import './header.scss'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <div className="logo">
        <Logo />
      </div>
      <h1>
        <Link to="/" className="link">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

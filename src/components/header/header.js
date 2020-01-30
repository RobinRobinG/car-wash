import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Container from '../container/container'
import Logo from '../../assets/logo.svg'
import './header.scss'

const Header = ({ siteTitle }) => (
  <header className="header">
    <Container>
      <div className="logo">
        <Logo />
      </div>
      <h1>
        <Link to="/" className="link">
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

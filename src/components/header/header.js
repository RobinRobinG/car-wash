import { Link } from 'gatsby'
import React from 'react'
import Container from '../container/container'
import TodayDate from '../today-date/today-date'
import Logo from '../../assets/logo.svg'
import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Link to="/" className="link">
          <div className="logo">
            <Logo />
          </div>
          <h1>Wash me, maybe?</h1>
        </Link>
        <TodayDate />
      </Container>
    </header>
  )
}

export default Header

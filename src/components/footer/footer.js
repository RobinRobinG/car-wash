import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          Definition of when to get a car wash: Five consecutive days with no
          precipitation.
        </p>
        <span>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer

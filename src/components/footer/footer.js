import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="container">
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

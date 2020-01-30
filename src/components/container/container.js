import React from 'react'
import './container.scss'

const Container = ({ children }) => {
  return <div className="container">{children}</div>
}

Container.propTypes = {
  children: PropTypes.element.isRequired
}

export default Container

import PropTypes from 'prop-types'
import React from 'react'
import './main.scss'

const Main = ({ result }) => (
  <div className="main">
    <span className="question">Should I wash my car today?</span>
    <h1>{result}</h1>
  </div>
)

Main.propTypes = {
  result: PropTypes.string,
}

export default Main

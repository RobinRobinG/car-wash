import PropTypes from 'prop-types'
import React from 'react'
import Container from '../container/container'
import './main.scss'

const Main = ({ result }) => (
  <div className="main">
    <Container>
      <div className="text">
        <h4 className="question">Should I wash my car today?</h4>
        <h1>{result}</h1>
      </div>
    </Container>
  </div>
)

Main.propTypes = {
  result: PropTypes.string
}

export default Main

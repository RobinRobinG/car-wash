import PropTypes from 'prop-types'
import React from 'react'
import Container from '../container/container'
import './main.scss'

const Main = ({ result }) => (
  <div className={`main ${result === 'No' ? 'no' : ''}`}>
    <Container>
      <span className="question">Should I wash my car today?</span>
      <h1>{result}</h1>
    </Container>
  </div>
)

Main.propTypes = {
  result: PropTypes.string
}

export default Main

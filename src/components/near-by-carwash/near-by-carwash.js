import React from 'react'
import Container from '../container/container'
import './near-by-carwash.scss'

const NearByCarwash = ({ carwash }) => {
  // if (!carwash.candidates) {
  //   return <div>Loading...</div>
  // }

  // const { formatted_address, name, rating } = carwash.candidates[0]

  return (
    <div className="near-by-carwash">
      <Container>
        <div className="carwash-name">
          <h4>Brown Bear Carwash</h4>
          <h4 className="carwash-rating">Rating: 3.8</h4>
        </div>
        <span className="carwash-address">
          15009 NE 8th PL Bellevue, WA 98007
        </span>
      </Container>
    </div>
  )
}

export default NearByCarwash

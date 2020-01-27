import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const NearByCarwash = ({ latitude, longitude }) => {
  return (
    <Fragment>
      <div>latitude: {latitude}</div>
      <div>longitude: {longitude}</div>
    </Fragment>
  )
}

NearByCarwash.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
}

export default NearByCarwash

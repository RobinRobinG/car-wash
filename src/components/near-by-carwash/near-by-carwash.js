import React, { Fragment } from 'react'

const NearByCarwash = ({ latitude, longitude }) => {
  return (
    <Fragment>
      <div>latitude: {latitude}</div>
      <div>longitude: {longitude}</div>
    </Fragment>
  )
}

export default NearByCarwash

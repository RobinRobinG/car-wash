import React from 'react'
import { format } from 'date-fns'
import './today-date.scss'

function getDate() {
  const today = new Date()
  return format(today, 'eee hh:mm a MMM d, yyyy')
}

const TodayDate = () => {
  return <div className="today-date">{getDate()}</div>
}

export default TodayDate

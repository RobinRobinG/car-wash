import React from 'react'
import { format } from 'date-fns'
import './today-date.scss'

function getDate(today) {
  return format(today, 'eee hh:mm a MMM d, yyyy')
}

const TodayDate = () => {
  const today = new Date()
  return <div className="today-date">{getDate(today)}</div>
}

export default TodayDate

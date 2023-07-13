import React from 'react'

export default function Error({ message }) {
  return (
    <div className="error_block">
      <span>{message}</span>
    </div>
  )
}

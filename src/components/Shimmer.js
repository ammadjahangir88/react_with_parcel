import React from 'react'

export default function Shimmer() {
  return (
    <div className='restaurant-list'> 
      {Array(10).fill('').map((e, index) => (
        <div key={index} className='shimmer-card'></div>
      ))}
    </div>
  

  
  )
}

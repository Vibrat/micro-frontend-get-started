import React from 'react'
import { useSelector } from 'react-redux'

export const Basic = () => {
  const counter = useSelector((state: any) => state.counter.value)
  return (
    <div className='bg-green-50 text-black-500 p-4'>
      Basic Components {process.env.MODE} {counter}
    </div>
  )
}
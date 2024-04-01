import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/counter'

export const Basic2 = () => {
  const counter = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='bg-green-50 text-black-500 p-4'>
      Basic Components {process.env.MODE} {counter}
      <button onClick={() => dispatch(increment())}>Click</button>
    </div>
  )
}
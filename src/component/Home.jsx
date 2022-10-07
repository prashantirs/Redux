import React from 'react'
import {useDispatch} from 'react-redux'
import {callAddAction} from '../Actions/action'

const Home = () => {
    
 const dispatch = useDispatch();
  return (
    <>
    <div>Home</div>
    <div>{}</div>
    <button className="add" onClick={dispatch(callAddAction())}>+</button>
    </>
  )
}

export default Home
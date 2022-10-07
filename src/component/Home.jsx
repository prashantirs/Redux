import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {callAddAction,callSubAction} from '../Actions/action'
const Home = () => {
    
 const dispatch = useDispatch();
 const addHandler = () => { 
    dispatch(callAddAction());
 }
 const subHandler = () => { 
    dispatch(callSubAction());
 }
 //useSelector is used to access the state variable from the store(actually in reducer)
 const {c} = useSelector(state => state.prashantReducer);  
  return (
    <>
    <div>Home</div>
    <div>{c}</div>
    <button className="add" onClick={addHandler}>+</button>
    <button className="add" onClick={subHandler} style={{marginLeft:"10px"}}>-</button>
    </>
  )
}

export default Home
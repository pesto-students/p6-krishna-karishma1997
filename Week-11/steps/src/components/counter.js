import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/actions';

export const Counter = () => {
    
const counter = useSelector((state) => state.counterReducer.count);
const dispatch = useDispatch();

const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

    return (
        <div>
            <h1>You have walked {counter} steps Today! </h1>
            <div className='display'>
            <button className='btnStylePlus' onClick={()=>handleIncrement()}>Add a Step</button>
            <button className='btnStyleMinus' onClick={()=>handleDecrement()}>Reset a steps</button></div>
        </div>
    );
};
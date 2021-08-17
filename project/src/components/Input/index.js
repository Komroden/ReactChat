import React from 'react';
import './style.scss';
export const Input=(props)=>{
    const {
        func,
      } = props;
    return  (
          <input className="inputtext" onChange={func}></input>
      );
}
import React from 'react';
import './style.scss';
export const Button=({text,func})=>{
    return  (
          <button className="button" onClick={func}>{text}</button>
      );
}
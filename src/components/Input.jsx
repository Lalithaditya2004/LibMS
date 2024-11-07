import React from 'react';
import './Input.css';

function Input({ value, onChange }) { 
  return (
    <div className="c1">
        <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Input;

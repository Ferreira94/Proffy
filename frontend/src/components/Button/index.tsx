import React, { InputHTMLAttributes } from 'react';

import './style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Button: React.FC<InputProps> = ({name}) => {
  return(
    <div className="comp-button">
      <button type="submit">{name}</button>
    </div>
  );
}

export default Button;
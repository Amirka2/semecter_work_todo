import React, {useState} from 'react';

import {saveTodo} from "helpers/todoItems";

interface MultiplicatorProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>}

export const Multiplicator = ({setLoading}: MultiplicatorProps) => {
  const [text, setText] = useState('');

  const handleClick = () => {
    setLoading(true)

    saveTodo(text);
    setText('');
    alert('clicked +');

    setLoading(false);
  }

  return (
    <div>
      <div onClick={handleClick}>
        +
      </div>
      <input type={'text'} onChange={(e) => setText(e.currentTarget.value)}/>
    </div>
  );
};

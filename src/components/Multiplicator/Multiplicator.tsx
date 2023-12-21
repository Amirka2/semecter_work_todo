import React, {useState} from 'react';

import {saveTodo} from "helpers/todoItems";

import * as Styles from './styles';

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
    <Styles.Wrapper>
      <Styles.Input type={'text'} onChange={(e) => setText(e.currentTarget.value)}/>
      <Styles.AddButton onClick={handleClick}>
        +
      </Styles.AddButton>
    </Styles.Wrapper>
  );
};

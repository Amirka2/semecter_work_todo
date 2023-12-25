import React from 'react';

import {Close} from "components/icons";
import {Input} from "components/Input";

import * as Styles from './styles';

interface SearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<string>;
}

export const Search = ({searchQuery, setSearchQuery}: SearchProps) => {
  return (
    <Styles.Wrapper>
      <Input
        placeholder="Введите текст для поиска"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
      />
      <Styles.ResetIcon onClick={() => setSearchQuery('')}>
        <Close />
      </Styles.ResetIcon>
    </Styles.Wrapper>
  );
};

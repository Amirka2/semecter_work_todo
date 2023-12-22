import React, {PropsWithChildren} from 'react';

import {Close} from "../icons";
import {createPortal} from "react-dom";

import * as Styles from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = ({children, onClose, isOpen}: PropsWithChildren<ModalProps>) => {
  return isOpen ? createPortal((
    <Styles.Wrapper>
      <Styles.Modal>
        <Close onClick={onClose} />
        <Styles.Content>
          {children}
        </Styles.Content>
      </Styles.Modal>
    </Styles.Wrapper>
  ),
    document.getElementById('modal')!) : null;
};

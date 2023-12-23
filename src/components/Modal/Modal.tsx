import React, {PropsWithChildren, useRef} from 'react';
import {createPortal} from "react-dom";
import { useOnClickOutside } from 'usehooks-ts';

import {Close} from "components/icons";

import * as Styles from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({children, onClose, isOpen}: PropsWithChildren<ModalProps>) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, onClose);

  return isOpen ? createPortal((
    <Styles.Wrapper>
      <Styles.Modal ref={ref}>
        <Close onClick={onClose} />
        <Styles.Content>
          {children}
        </Styles.Content>
      </Styles.Modal>
    </Styles.Wrapper>
  ),
    document.getElementById('modal')!) : null;
};

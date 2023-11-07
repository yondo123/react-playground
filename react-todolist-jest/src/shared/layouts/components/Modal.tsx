import ReactDOM from 'react-dom';
import { Button } from './Button';
import { overlayStyle, modalStyle } from '../styles/modalStyle';
import React, { useState } from 'react';

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
}

export const Modal = ({ children, onClose, open }: ModalProps) => {
  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <React.Fragment>
      <div css={overlayStyle} />
      <div css={modalStyle}>
        <Button onClick={onClose} type="button" color="#494454">
          닫기
        </Button>
        {children}
      </div>
    </React.Fragment>,
    document.getElementById('modal') as Element
  );
};

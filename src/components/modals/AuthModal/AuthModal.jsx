import React, { useState } from 'react';
import { Divider, Modal } from 'antd';
import LoginModal from '../LoginModal/LoginModal';
import SignUpModal from '../SignUpModal/SignUpModal';

const AuthModal = ({ open, onClose }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      {click ? (
        <SignUpModal open={open} onClose={onClose} click={handleClick} />
      ) : (
        <LoginModal open={open} onClose={onClose} click={handleClick} />
      )}
    </>
  );
};

export default AuthModal;

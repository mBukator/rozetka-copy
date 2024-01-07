import { Button } from 'antd';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserCabinet = () => {
  const [error, setError] = useState('')

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async() => {
    setError('')
    try {
      await logout();
      navigate('/');
    } catch (error) {
        setError('Failed to log out')
    }
  };
  return (
    <div>
      <Button type="primary" onClick={handleLogout}>
        Вийти
      </Button>
    </div>
  );
};

export default UserCabinet;

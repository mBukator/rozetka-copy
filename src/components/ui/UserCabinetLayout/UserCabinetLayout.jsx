import React from 'react';
import CabinetNav from '../../CabinetNav/CabinetNav';
import { Outlet } from 'react-router-dom';

import styles from './UserCabinetLayout.module.css';

const UserCabinetLayout = () => {
  return (
    <div className={styles.cabinet}>
      <CabinetNav />
      <Outlet />
    </div>
  );
};

export default UserCabinetLayout;

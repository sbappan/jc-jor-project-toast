import React, { useContext } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const {toasts} = useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => (<li className={styles.toastWrapper} key={toast.id}>
        <Toast id={toast.id} variant={toast.variant}>{toast.message}</Toast>
      </li>))}
    </ol>
  );
}

export default ToastShelf;

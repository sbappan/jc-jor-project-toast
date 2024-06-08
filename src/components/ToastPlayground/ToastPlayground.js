import React, { useState } from 'react';

import Button from '../Button';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("notice");
  const [isLivePopupShown, setIsLivePopupShown] = useState(false);

  console.log('rendering', variant, message);

  function closePopup() {
    setIsLivePopupShown(false);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isLivePopupShown ? <Toast message={message} variant={variant} closePopup={closePopup} /> : null}

      {/* <ToastShelf /> */}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(event) => setMessage(event.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variantOption) => (
            <label htmlFor={`variant-${variantOption}`} key={variantOption}>
              <input
                id={`variant-${variantOption}`}
                type="radio"
                name="variant"
                value={variantOption}
                checked={variant === variantOption}
                onChange={(event) => setVariant(event.target.value)}
              />
              {variantOption}
            </label>))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => setIsLivePopupShown(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;

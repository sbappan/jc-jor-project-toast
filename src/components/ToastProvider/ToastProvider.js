import React, { useState } from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function handleSubmit(variant, message) {
    console.log("handleSubmit", variant, message);

    setToasts(prevState => {
      return [...prevState, {
        id: crypto.randomUUID(),
        variant: variant,
        message: message
      }]
    });
  }

  function handleDismiss(id) {
    console.log("handleDismiss", id);

    setToasts(prevState => {
      const newState = prevState.filter(elem => elem.id !== id);

      return newState;
    })
  }

  return (<ToastContext.Provider value={{
    toasts, handleSubmit, handleDismiss
  }}>
    {children}
  </ToastContext.Provider>);
}

export default ToastProvider;

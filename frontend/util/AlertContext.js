import React, { createContext, useContext, useState } from 'react';
import CustomAlert from '../shared/CustomAlert';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    visible: false,
    title: '',
    message: '',
  });

  const showAlert = (title, message) => {
    setAlert({
      visible: true,
      title,
      message,
    });
  };

  const closeAlert = () => {
    setAlert({
      ...alert,
      visible: false,
    });
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <CustomAlert
        visible={alert.visible}
        title={alert.title}
        message={alert.message}
        onClose={closeAlert}
      />
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};

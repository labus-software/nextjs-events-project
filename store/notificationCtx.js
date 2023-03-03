import { createContext, useContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

export const notificationCtx = () => {
  return useContext(NotificationContext);
};

function NotificationContextProvider({ children }) {
  const [notificationActive, setNotificationActive] = useState();

  useEffect(() => {
    if (
      notificationActive &&
      (notificationActive.status === 'success' ||
        notificationActive.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setNotificationActive(null);
      }, 2300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notificationActive]);

  const showNotificationHandler = (notificationData) => {
    setNotificationActive(notificationData);
  };
  const hideNotificationHandler = () => {
    setNotificationActive(null);
  };

  const context = {
    notification: notificationActive,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContextProvider;

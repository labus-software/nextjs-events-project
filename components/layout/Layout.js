import { Fragment } from "react";
import NotificationContextProvider from "../../store/notificationCtx";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <NotificationContextProvider>
        <MainHeader />
        <main>{props.children}</main>
      </NotificationContextProvider>
    </Fragment>
  );
};

export default Layout;

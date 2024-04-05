import { Navigate, useLocation } from "react-router-dom";

interface ProtectedProps {
  children: JSX.Element;
}

export const PrivateRoutes = (props: ProtectedProps): JSX.Element => {
  const { children } = props;
  // selector to authenticator's store

  // const token = Store.getState().auths.token;
  const token = "jjj";

  const location = useLocation();

  if (token === null) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate replace state={{ from: location }} to='/login' />;
  }

  return children;
};

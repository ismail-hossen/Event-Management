import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../auth_context/AuthContext";
import PropTypes from "prop-types";

const Private = ({ children }) => {
  const { user, loading } = useContext(ThemeContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Private;

Private.propTypes = {
  children: PropTypes.node,
};

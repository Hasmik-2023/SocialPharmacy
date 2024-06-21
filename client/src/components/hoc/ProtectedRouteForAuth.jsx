import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteForAuth = ({ isAllowed, redirectPath = '/', children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return children;
};

export default ProtectedRouteForAuth;

import React from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../../hooks/useAuthContext";

export default function ProtectedRoute({ children }) {
  const { authUser, isAuthUserLoading } = useAuthContext();

  if (!authUser && !isAuthUserLoading) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {isAuthUserLoading}
      {children}
    </>
  );
}

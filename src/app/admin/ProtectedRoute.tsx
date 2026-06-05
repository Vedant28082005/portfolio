import React from 'react';
import { Navigate } from 'react-router';
import { isAuthenticated } from './auth';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (!isAuthenticated()) {
    return <Navigate to="/admin" replace />;
  }
  return <>{children}</>;
}

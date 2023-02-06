import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = ({ children }) => {
    const { user } = useAuth0();

    

    return !!user ? children : <Navigate to="/" />
}

// ProtectedRoute.tsx

import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

interface IProtectedRouteProps {
    children: JSX.Element;
}

export default function ProtectedRoute({ children }: IProtectedRouteProps) {
    const auth = useContext(AuthContext);

    if (!auth?.userDetails) {
        return <Navigate to="/sign-in" replace />;
    }

    return (
        children
    );
}


import React, { createContext, useState } from "react";

export const AuthModalContext = createContext();

function AuthModalProvider({ children }) {
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false)
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    return (
        <AuthModalContext.Provider value={{ isLoginFormOpen, setIsLoginFormOpen, isSignUpOpen, setIsSignUpOpen }}>
            {children}
        </AuthModalContext.Provider>
    );
}

export default AuthModalProvider;

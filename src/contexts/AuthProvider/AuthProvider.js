import React, { createContext } from 'react';

export const AuthContext = createContext('Yesss');
// const auth = getAuth(app);


const authInfo = {

}

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
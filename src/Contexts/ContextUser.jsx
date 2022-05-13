import React, { useState, useEffect } from 'react';
import { isAuthent } from '../hooks/useUser'

const ContextUser = React.createContext({});

function ContextUserProvider({ children }) {

    const [user,setUser] = useState({
        id: 47,
        name: 'user',
        auth: false,
    })

    useEffect(() => {
        isAuthent(setUser) 
    }, [])

    return (
        <ContextUser.Provider value={{user, setUser}}>
            {children}
        </ContextUser.Provider>
    );
}

export {ContextUser, ContextUserProvider};

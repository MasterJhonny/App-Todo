import React, { useState } from 'react';

const ContextUser = React.createContext({});

function ContextUserProvider({ children }) {

    const dataLocal = JSON.parse(localStorage.getItem('user'))
    
    // const setValue = 

    const [user, setUser] = useState(dataLocal ? dataLocal : null)

    return (
        <ContextUser.Provider value={{user, setUser}}>
            {children}
        </ContextUser.Provider>
    );
}

export {ContextUser, ContextUserProvider};

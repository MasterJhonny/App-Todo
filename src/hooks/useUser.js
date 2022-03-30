import React, { useContext } from 'react'

// import context
import { ContextUser } from '../Contexts/ContextUser'

function useUser() {

    const { user, setUser } = useContext(ContextUser);


    const Login = () => {

    }

    const isAuthent = () => {
        console.log('isAuthent', user)
        if (user) {
            return true;
        } else {
            return false;
        }
    }

    return {
        Login,
        isAuthent
    }
}

export {useUser};
import React from 'react';

import { Header } from '../Header/Header';
import { Forlogin } from './Forlogin';

function Login({ setDatauser }) {
    return (
        <React.Fragment>
            <Header/>
            <Forlogin setDatauser={setDatauser}/>
        </React.Fragment>

    );
}

export { Login };
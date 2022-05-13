import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// import './Forsignup.css';

// import context
import { ContextUser } from '../Contexts/ContextUser'
import { functions } from '../hooks/helpers';
import { isAuthent } from '../hooks/useUser'

function Forlogin() {

    // context 
    const { setUser } = useContext(ContextUser);

    // use navegation for nav to pages
    const nav = useNavigate();

    //state new user signup
    const [userLogin, setUserLogin] = useState({
        name:'',
        password: ''
    });

    // login autenticate
    const loginUser = async (data) => {
        const {name, password} = data;
        if(name && password){
            try {
                const response = await fetch('http://192.168.1.101:8080/api/v1/users/login', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    }, 
                    body: JSON.stringify({
                        name, 
                        password
                    })
                })
                const rta = await response.json();
                console.log(rta)

                if (rta.error) {
                    alert("username or password incorrest!!")
                } else {
                    // saver Cookie
                    functions.saveCookies('jwt', rta.token);
                    
                    isAuthent(setUser)

                    // redirect to home page user
                    nav('/App-Todo')
                }

            } catch (error) {
                console.error(error)
            }
        }
    }
    

    // update data users on change
    const onChangeData = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    // on onSubmit post form
    const onsubmitAction = (e) => {
        e.preventDefault();
        loginUser(userLogin);

    }

    return (
        <div className="main main-login">
            <h4>Login</h4>
            <form className="form-signup" onSubmit={onsubmitAction} method="post" >
                <label>
                    <input className="form-control" type="text" name="name" placeholder="Usename" autoFocus onChange={onChangeData}/>
                </label>
                <br/>
                <label>
                    <input className="form-control" type="password" name="password" placeholder="Password" onChange={onChangeData}/>
                </label>
                <br/>
                <button className="btn-send" >Login</button>
            </form>
            
        </div>
    );
}

export { Forlogin };
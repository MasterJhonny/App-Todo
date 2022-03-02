import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Forsignup.css';

function Forsignup() {

    // use navegation for nav to pages
    const nav = useNavigate();

    //state new user signup
    const [user, setUser] = useState({
        name:'',
        email: '',
        password: ''
    });

    // create new user
    const signupUser = async (data) => {
        const {name, email, password} = data;
        if(name && email && password){
            try {
                const response = await fetch('http://192.168.1.101:8080/api/v1/users/signup', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    }, 
                    body: JSON.stringify({
                        name, 
                        email, 
                        password
                    })
                })
                const rta = await response.json();
                //console.log(rta)

                // redirect to home page user
                nav('/App-todo')
            } catch (error) {
                console.error(error)
            }
        }
    }
    

    // update data users on change
    const onChangeData = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })
    }

    // on onSubmit post form
    const onsubmitAction = (e) => {
        e.preventDefault();
        signupUser(user);

    }

    return (
        <div className="main main-login">
            <h4>Sig nup</h4>
            <form className="form-signup" onSubmit={onsubmitAction} method="post" >
                <label>
                    <input className="form-control" type="text" name="name" placeholder="Usename" autoFocus onChange={onChangeData}/>
                </label>
                <br/>
                <label>
                    <input className="form-control" type="email" name="email" placeholder="Email" onChange={onChangeData}/>
                </label>
                <br/>
                <label>
                    <input className="form-control" type="password" name="password" placeholder="Password" onChange={onChangeData}/>
                </label>
                <br/>
                <button className="btn-send" >enviar</button>
            </form>
            
        </div>
    );
}

export { Forsignup };
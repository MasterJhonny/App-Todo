import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import './Forsignup.css';

function Forlogin({ setDatauser }) {

    // use navegation for nav to pages
    const nav = useNavigate();

    //state new user signup
    const [user, setUser] = useState({
        name:'',
        password: ''
    });

    // create new user
    const signupUser = async (data) => {
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
                
                setDatauser(rta.data)

                // redirect to home page user
                nav('/App-todo/', {
                    rta
                })
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
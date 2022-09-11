import React from "react";
import axios from 'axios';
import { useState } from "react";


function Login() {

    const [login, setLogin] = useState(() => {
        return {
            username: "",
            password: "",
        }
    })

    const changeInputLogin = event => {
        event.persist()
        setLogin(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }


    const submitChackin = event => {
        event.preventDefault();

        const params = new URLSearchParams();
        params.append('username', login.username);
        params.append('password', login.password);

            axios.post('http://79.143.31.216/login', params
            ).then(response => {

                    localStorage.setItem('token', response.data.access_token)
                    localStorage.setItem('login', login.username)
                    console.log(localStorage.token)
                    window.location.href= '/main'                 
                }
                
            ).catch(() => {
                alert("Произошла ошибка на сервере")
            })
        }

    return (
        <div className="App">

            <p>Вход</p>

            <form onSubmit={submitChackin}>

                <p>Введите логин</p>
                <input type="username" name="username" value={login.username} onChange={changeInputLogin} />

                <p>Введите пароль</p>
                <input type="password" name="password" value={login.password} onChange={changeInputLogin} />

                <br />
                
                <button>
                    Вход
                </button>

            </form>

        </div>
    );
}



export default Login;
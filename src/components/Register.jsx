import React from "react";
import axios from 'axios';
import { useState } from "react";


function Register() {

    const [register, setRegister] = useState(() => {
        return {
            username: "",
            password: "",
            password2: "",
        }
    })

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }


    const submitChackin = event => {
        event.preventDefault();
        if (register.password !== register.password2) {
            alert("Ваши пароли не совпадают")
        } else {
            axios.post(`https://79.143.31.216/register?username=${register.username}&password=${register.password}`, {
                username: register.username,
                password: register.password,

            }).then(response => {

                    alert(`Пользователь ${register.username} успешно зарегистрирован`)
                    window.location.href = "/"
                }
                
            ).catch(() => {
                alert("Произошла ошибка на сервере")
            })
        }
    }


    return (
        <div className="App">

            <p></p>

            <form onSubmit={submitChackin}>

                <p>Введите логин</p>
                <input type="username" name="username" value={register.username} onChange={changeInputRegister} />



                <p>Введите пароль</p>
                <input type="password" name="password" value={register.password} onChange={changeInputRegister} />

                <p>Повторите пароль</p>
                <input type="password" name="password2" value={register.password2} onChange={changeInputRegister} />


                <br />

                <button>
                    Вход
                </button>

                <button>
                    Регистрация
                </button>

            </form>

        </div>
    );
}

export default Register;
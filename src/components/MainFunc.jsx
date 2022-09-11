import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


function MainFunc() {

    const [squeeze, setSqueeze] = useState(() => {
        return {
            squeeze: "",
        }
    })

    const changeInputSqueeze = event => {
        event.persist()
        setSqueeze(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }


    const submitChackin = event => {
        event.preventDefault();

        axios.post(`http://79.143.31.216/squeeze?link=${squeeze.squeeze}`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        }
        ).then(response => {

            localStorage.setItem('short', response.data.short)
            window.location.href = "/linksto"
        }

        ).catch(() => {
            alert("Произошла ошибка на сервере")
        })
    }


    return (
        <div className="App">

            <div className="top">
                <p>{localStorage.login}</p>

                <div>
                    <NavLink to="/links">
                        <button>
                            Таблица
                        </button>
                    </NavLink>

                    <NavLink to="/">
                        <button>
                            Выйти
                        </button>
                    </NavLink>
                </div>
            </div>

            <hr />

            <p>Вставьте url в поле, нажмите "Сократить" и получите короткую ссылку для личного пользования </p>

            <form onSubmit={submitChackin}>
                <input name="squeeze" value={squeeze.squeeze} onChange={changeInputSqueeze} />
                <button>СОКРАЩАЙ</button>
            </form>

        </div>
    );
}

export default MainFunc;
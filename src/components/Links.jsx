import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


function Links() {

    const baseUrl='https://79.143.31.216/statistics'

    const [data, setData] = useState([])

    useEffect(() => {
        axios(baseUrl, 
            {headers: {
                Authorization: `Bearer ${localStorage.token}`,
            }
        },)
        .then (
            (response) => {
                console.log(response)
                setData(response.data)
            }
        )
    }, [])

    return (
      <div className="App">
        
        <div className="top">

                <p>{localStorage.login}</p>


                <div>
                    <NavLink to="/main">
                    <button>
                        Вернуться
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

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Короткая ссылка</th>
                    <th>Длинная ссылка</th>
                    <th>Кол-во переходов</th>
                </tr>
            </thead>

            <tbody>
                
                    {data.map(
                        (item=>(
                            <tr>
                            <td>{item.id}</td>
                            <td>http://79.143.31.216/s/{item.short}</td>
                            <td>{item.target}</td>
                            <td>{item.counter}</td>
                            </tr>
                        )
                        ))}




            </tbody>

        </table>

        
  
      </div>
    );
  }
  
  export default Links;
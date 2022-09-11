import { NavLink } from "react-router-dom";


function LinksTo() {

  let a = localStorage.short
  let myLink = 'https://79.143.31.216/s/' + a

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

      <p>Твоя ссылка - <a href={myLink} target="_blank" rel="noreferrer">{myLink} </a></p>

    </div>
  );
}

export default LinksTo;
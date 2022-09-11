import { NavLink } from "react-router-dom";


function HomePage() {

    localStorage.clear()

    return (
      <div className="App">
        
        <p>Добро Пожаловать на Сайт с Ссылками</p>

        <NavLink to="/register">
          <button>Регистрация</button>
        </NavLink>

        <NavLink to="/login">
          <button>Логин</button>
        </NavLink>
        
  
      </div>
    );
  }
  
  export default HomePage;
import logo from "./assets/Logo.png";
import avatar from "./assets/Ellipse 18.png";
import "/src/Header.css";

function Header({ handleAddClick, weatherData }) {
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
    return(
        <header className = "header">
            <img className ="header__logo" src = {logo} />
            <p className = "header__date-and-location">{currentDate}, {weatherData.city}</p>
            <button onClick={handleAddClick} type="button" className ="header__add-clothes-button">+ Add Clothes</button>
            <div className ="header__user-container">
                <p className ="header__username">Terrence Tegegne</p>
                <img src= {avatar} alt="Terrence Tegegne" className="header__avatar"/>

            </div>

            </header>

    )
}
export default Header;
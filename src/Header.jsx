import logo from "./assets/Logo.png";
import avatar from "./assets/Ellipse 18.png";
import "/src/Header.css";

function Header({ handleAddClick }) {
    return(
        <header className = "header">
            <img className ="header__logo" src = {logo} />
            <p className = "header__date-and-location">September 17, New York</p>
            <button onClick={handleAddClick} type="button" className ="header__add-clothes-button">+ Add Clothes</button>
            <div className ="header__user-container">
                <p className ="header__username">Terrence Tegegne</p>
                <img src= {avatar} alt="Terrence Tegegne" className="header__avatar"/>

            </div>

            </header>

    )
}
export default Header;
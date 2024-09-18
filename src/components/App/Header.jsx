import "./Header.css";
import logo from "/src/assets/wtwr°.svg"
import avatar from "/src/assets/Ellipse 18.svg"


function Header() {
    return(
        <div className = "header">
            <img className ="header__logo" src = {logo} />
            <p className = "header__date-and-location">September 17, New York</p>
            <button className ="header__add-clothes-button">+ Add Clothes</button>
            <div className ="header__user-container">
                <p className ="header__username">Terrence Tegegne</p>
                <img src= {avatar} alt="Terrence Tegegne" className="header__avatar"/>

            </div>

            </div>

    )
}
export default Header;
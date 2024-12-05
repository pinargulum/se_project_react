import "../SideBar/SideBar.css"
import avatar from "/src/assets/Ellipse 18.png";

function SideBar() {
    return(
        <div className="profile__sidebar">
            <img className="profile__picture-sidebar" src={avatar} alt="profile-picture" />
            
            <p className="profile__username-sidebar">Terrence Tegegne</p>
           </div>
    )
}
export default SideBar
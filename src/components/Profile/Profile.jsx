import avatar from "/src/assets/Ellipse 18.png";
import "../Profile/Profile.css"
import ClothsSection from "../ClothesSection/ClothesSection";
function Profile() {
    return(
        <div className="profile__sidebar">
            <img className="profile__picture-sidebar" src={avatar} alt="profile-picture" />
            
            <p className="profile__username-sidebar">Terrence Tegegne</p>
            <ClothsSection />
        </div>
    )
}
export default Profile
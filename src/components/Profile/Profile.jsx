import "../Profile/Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import { useContext } from "react";
function Profile({ onCardClick, profileItems, handleProfileAddItem, isLoggedIn, profileModal}) {
  const currentUser = useContext(CurrentUserContext);
  
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar isLoggedIn={isLoggedIn} profileModal={profileModal} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection onCardClick={onCardClick} profileItems={profileItems} handleProfileAddItem={handleProfileAddItem} />
      </section>
    </div>
  );
}
export default Profile;

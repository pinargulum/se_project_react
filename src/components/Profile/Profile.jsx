import "../Profile/Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import { useContext } from "react";
//import ProfileEditModal from "../ProfileEdidModal/ProfileEditModal.jsx";
function Profile({ onCardClick, clothingItems, handleProfileAddItem, isLoggedIn, handleEditClick }) {
  const currentUser = useContext(CurrentUserContext);
  
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleEditClick={handleEditClick} />
      </section>
      <section className="profile__clothing-items">
      <ClothesSection onCardClick={onCardClick} clothingItems={clothingItems} handleProfileAddItem={handleProfileAddItem} />
      </section>
    </div>
  );
}
export default Profile;

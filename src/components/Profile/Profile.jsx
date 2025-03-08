import "../Profile/Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";
//import ProfileEditModal from "../ProfileEdidModal/ProfileEditModal.jsx";
function Profile({
  handleCardClick,
  clothingItems,
  handleProfileAddItem,
  handleEditClick,
  isLoggedIn,
  handleCardLike
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleEditClick={handleEditClick}
          isLoggedIn={isLoggedIn}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
        isLoggedIn={isLoggedIn}
          onCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleProfileAddItem={handleProfileAddItem}
          handleCardLike={handleCardLike}
        />
      </section>
    </div>
  );
}
export default Profile;

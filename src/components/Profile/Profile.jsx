import "../Profile/Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
import { useContext } from "react";

function Profile({
  handleCardClick,
  clothingItems,
  handleProfileAddItem,
  handleEditClick,
  isLoggedIn,
  handleLogout,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      {currentUser && (
        <div className="profile">
          <section className="profile__sidebar">
            <SideBar
              handleEditClick={handleEditClick}
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
            />
          </section>
          <section className="profile__clothing-items">
            <ClothesSection
              isLoggedIn={isLoggedIn}
              handleCardClick={handleCardClick}
              clothingItems={clothingItems}
              handleProfileAddItem={handleProfileAddItem}
              onCardLike={onCardLike}
            />
          </section>
        </div>
      )}
    </>
  );
}
export default Profile;

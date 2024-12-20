import "../Profile/Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
function Profile({ onCardClick, profileItems, handleProfileAddItem}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection onCardClick={onCardClick} profileItems={profileItems} handleProfileAddItem={handleProfileAddItem} />
      </section>
    </div>
  );
}
export default Profile;

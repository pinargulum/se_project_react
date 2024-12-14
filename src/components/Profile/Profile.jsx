import "../Profile/Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
function Profile({ onCardClick, profileItems, weatherData }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection onCardClick={onCardClick} profileItems={profileItems} weatherData={weatherData}/>
      </section>
    </div>
  );
}
export default Profile;

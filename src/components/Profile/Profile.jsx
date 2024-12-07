
import "../Profile/Profile.css"
import ClothsSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
function Profile() {
    return(
        <div className="profile">
            <section className="profile__sidebar">
            <SideBar />
            </section>
            <section className="profile__clothing-items">
            <ClothsSection />
            </section>
            
        </div>
    )
}
export default Profile
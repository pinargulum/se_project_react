
import "../Profile/Profile.css"
import ClothsSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
function Profile() {
    return(
        <div className="profile">
            <SideBar />
            <ClothsSection />
        </div>
    )
}
export default Profile
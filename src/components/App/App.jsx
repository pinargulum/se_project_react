import "./App.css";
import React from "react";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header.jsx";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../ModalWithForm/AddItemModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Footer from "../Footer/Footer.jsx";
import Api from "../../utils/Api.js";
import CurrentTemperatureUnitContext from "../../utils/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";
import { getWeather, getCurrentWeather } from "/src/utils/weatherApi.js";
import { coordinates, APIkey } from "/src/utils/weatherApi.js";
import * as auth from "../../utils/auth.js";
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
import EditProfileModel from "../EditProfileModal/EditProfileModal.jsx";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  ///////////////////////////////// HEADER /////////////////////////////////
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [selectedCard, setSlectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const locationWeather = getCurrentWeather(data);
        setWeatherData(locationWeather);
      })
      .catch(console.error);
  }, []);

  const closeActiveModal = () => {
    setActiveModal("");
  };
  /////////////////////////// CLOTHING ITEMS //////////////////
  const [clothingItems, setClothingItems] = useState([]);
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSlectedCard(card);
  };
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  function handleCardDelete(cardData) {
    cardData = selectedCard._id;
    Api.deleteClothingItem(cardData)
      .then(() => {
        closeActiveModal();
        setClothingItems((prewItems) =>
          prewItems.filter((item) => item._id !== cardData),
        );
      })
      .catch(console.error);
  }
  function handleAddItemSubmit(newItem) {
    setIsLoading(true);
    Api.addClothingItem(newItem)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        setIsLoading(false);
        closeActiveModal();
      })
      .catch(console.error);
  }
  //////////////////////   USER    //////////////////////////
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userData, setUserData] = useState();
  const [currentUser, setCurrentUser] = useState({});

  const loginModal = () => {
    setActiveModal("signin");
  };
  const registerModal = () => {
    setActiveModal("signup");
  };
  const profileEditModal = () => {
    setActiveModal("edit-profile");
  };

  const handleUpdateProfile = ({ name, avatar }) => {
    const jwt = localStorage.getItem("jwt");
    auth
      .updateProfile(name, avatar)
      .then((data) => {
        setCurrentUser(data);
        setUserData(data);
        setIsLoggedIn(true);
        closeActiveModal("edit-profile");
      })
      .catch(console.error);
  };

  // function to get the user data
  function getUserData(token) {
    auth.getCurrentUser(token).then((userData) => {
      setIsLoggedIn(true);
      setCurrentUser(userData);
    });
  }

  // updated login function
  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .loginUser(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.jwt);
        getUserData(data.jwt);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleCreateUser = ({ email, password, name, avatar }) => {
    auth
      .registerUser(email, password, name, avatar)
      .then((userData) => {
        login({ email, password });
        closeActiveModal("signup");
      })

      .catch(console.error);
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              registerModal={registerModal}
              loginModal={loginModal}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
              userData={userData}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    userData={userData}
                    onClick={handleCardClick}
                    profileItems={clothingItems}
                    handleProfileAddItem={handleAddClick}
                    profileEditModal={profileEditModal}
                  />
                }
              />
            </Routes>
            <RegisterModal
              isOpen={activeModal === "signup"}
              onClose={closeActiveModal}
              handleCreateUser={handleCreateUser}
            />
            <LoginModal
              isOpen={activeModal === "signin"}
              onClose={closeActiveModal}
              handleLogin={handleLogin}
            />
            <EditProfileModel
              isOpen={activeModal === "edit-profile"}
              onClose={closeActiveModal}
              handleUpdateProfile={handleUpdateProfile}
              userData={userData}
            />
            <AddItemModal
              isOpen={activeModal === "add-garment"}
              onAddItem={handleAddItemSubmit}
              onCloseModal={closeActiveModal}
              isLoading={isLoading}
            />

            <ItemModal
              activeModal={activeModal}
              card={selectedCard}
              onClose={closeActiveModal}
              handleCardDelete={handleCardDelete}
            />
            <Footer />
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

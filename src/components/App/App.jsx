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
import SideBar from "../SideBar/SideBar.jsx";
import Api from "../../utils/Api.js";
import CurrentTemperatureUnitContext from "../../utils/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";
import { getWeather, getCurrentWeather } from "/src/utils/weatherApi.js";
import { coordinates, APIkey } from "/src/utils/weatherApi.js";
import * as auth from "../../utils/auth.js";
import { useState, useEffect } from "react";
import { setToken, getToken, removeToken } from "../../utils/token.js";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
import ProfileEditModal from "../ProfileEditModal/ProfileEditModal.jsx";

function App() {
  ////////////////////////////STATES///////////////////////////////////////
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [selectedCard, setSlectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userData, setUserData] = useState();
  const [currentUser, setCurrentUser] = useState({});
  ///////////////////////////////// HEADER /////////////////////////////////

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

  ///////////////////////////MODALS////////////////////////////

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const loginModal = () => {
    setActiveModal("signin");
  };
  const registerModal = () => {
    setActiveModal("signup");
  };
  const handleEditClick = () => {
    setActiveModal("profile");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };
  /////////////////////////// CLOTHING ITEMS //////////////////
  

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSlectedCard(card);
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
  function handleAddItemSubmit({ newItem, token }) {
    token = localStorage.getItem("token");
    setIsLoading(true);
    Api.addClothingItem(newItem, token)
      .then((item) => {
        getUserData(token);
        setIsLoggedIn(true)
        setClothingItems([item, ...clothingItems]);
        setIsLoading(false);
        closeActiveModal();
      })
      .catch(console.error);
  }
  //////////////////////   USER    //////////////////////////

  // function to get the user data
  function getUserData(token) {
    token = localStorage.getItem("token");
    auth.getCurrentUser(token).then((data) => {
      setIsLoggedIn(true);
      setCurrentUser(data);
    });
  }
  useEffect(() => {
    localStorage.getItem("token");
    if ((data) => getUserData(data));
  }, []);

  const handleProfileChange = (name, avatar) => {
    const token = localStorage.getItem("token");
    auth.updateProfile(token, name, avatar).then((data) => {
      localStorage.getItem("token");
      getUserData(data);
      setCurrentUser(data);
      closeActiveModal().catch(console.error);
    });
  };

  // updated login function
  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .loginUser(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        getUserData(data.token);

        closeActiveModal();
      })
      .catch(console.error);
  };
  // updated reate function
  const handleCreateUser = ({ email, password, name, avatar }) => {
    auth
      .registerUser(email, password, name, avatar)
      .then((userData) => {
        handleLogin({ email, password });
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
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      isOpen={activeModal === "profile"}
                      onClick={handleCardClick}
                      profileItems={clothingItems}
                      handleProfileAddItem={handleAddClick}
                      handleEditClick={handleEditClick}
                      isLoggedIn={isLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <RegisterModal
              isOpen={activeModal === "signup"}
              onCloseModal={closeActiveModal}
              handleCreateUser={handleCreateUser}
            />
            <LoginModal
              isOpen={activeModal === "signin"}
              onCloseModal={closeActiveModal}
              handleLogin={handleLogin}
            />
            <ProfileEditModal
              isOpen={activeModal === "profile"}
              onCloseModal={closeActiveModal}
              handleProfileChange={handleProfileChange}
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
              onCloseModal={closeActiveModal}
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

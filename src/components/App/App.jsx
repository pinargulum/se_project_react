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
import DeleteModal from "../../../DeleteModal/DeleteModal.jsx";
import Api from "../../utils/Api.js";
import CurrentTemperatureUnitContext from "../../utils/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../../utils/contexts/CurrentUserContext.jsx";
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
  const [currentUser, setCurrentUser] = useState({});
  const [isLiked, setIsLiked] = useState(false);

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
  const deleteModalClick = () => {
    setActiveModal("delete");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };
  /////////////////////////// CLOTHING ITEMS //////////////////

  const handleCardClick = (item) => {
    setActiveModal("preview");
    setSlectedCard(item);
  };

  useEffect(() => {
    Api.getClothingItems()
      .then((cardData) => {
        setClothingItems(cardData);
      })
      .catch(console.error);
  }, []);
  // delete a card
  function handleCardDelete({ item, token }) {
    token = localStorage.getItem("token");
    item = selectedCard._id;
    Api.deleteItem(item, token)
      .then((cardData) => {
        getUserData(cardData.token);
        setIsLoggedIn(true);

        setClothingItems((prewItems) =>
          prewItems.filter((prewItem) => prewItem._id !== item),
        );
        closeActiveModal("delete");
      })
      .catch(console.error);
  }
  // add new item
  function handleAddItemSubmit(newItem, token) {
    const cardData = selectedCard._id === currentUser._id;
    token = localStorage.getItem("token");
    setIsLoading(true);
    Api.addClothingItem(newItem, token)
      .then((newItem) => {
        getUserData(cardData.token);
        setIsLoggedIn(true);
        setClothingItems([newItem, ...clothingItems]);
        setIsLoading(false);
        closeActiveModal();
      })
      .catch(console.error);
  }
  // like && dislike cards
  function handleCardLike({ _id, likes, token }) {
    token = localStorage.getItem("token");
    if (!isLiked) {
      Api.addCardLike(_id, token, likes)
        .then((cardData) => {
          setIsLiked(true);

          setClothingItems((prewItems) =>
            prewItems.filter((item) => item._id !== cardData),
          );
        })
        .catch(console.error);
    }
    if (isLiked) {
      Api.removeCardLike(_id, token, likes)
        .then((cardData) => {
          setIsLiked(false);
          setClothingItems((prewItems) =>
            prewItems.filter((item) => item._id !== cardData),
          );
        })
        .catch(console.error);
    }
  }
  //////////////////////   USER    //////////////////////////
  // function to get the user data
  function getUserData(token) {
    token = localStorage.getItem("token");
    auth
      .getCurrentUser(token)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
      })
      .catch(console.error);
  }
  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data) {
      return getUserData(data);
    }
  }, []);
  // update user data
  const handleProfileChange = (name, avatar) => {
    const token = localStorage.getItem("token");
    auth
      .updateProfile(token, name, avatar)
      .then((data, update) => {
        getUserData(data);
        setCurrentUser({ data: update });
        closeActiveModal("profile");
      })
      .catch(console.error);
  };

  //login function
  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .loginUser(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        getUserData(data.token);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch(console.error);
  };
  //register function
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
                    onCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile
                      isOpen={activeModal === "profile"}
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
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
              loginModal={loginModal}
            />
            <LoginModal
              isOpen={activeModal === "signin"}
              onCloseModal={closeActiveModal}
              handleLogin={handleLogin}
              registerModal={registerModal}
            />
            <ProfileEditModal
              isOpen={activeModal === "profile"}
              onCloseModal={closeActiveModal}
              handleProfileChange={handleProfileChange}
            />
            <DeleteModal
              activeModal={activeModal}
              onCloseModal={closeActiveModal}
              handleCardDelete={handleCardDelete}
            />
            <AddItemModal
              isOpen={activeModal === "add-garment"}
              onAddItem={handleAddItemSubmit}
              onCloseModal={closeActiveModal}
              isLoading={isLoading}
            />

            <ItemModal
              activeModal={activeModal}
              deleteModalClick={deleteModalClick}
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

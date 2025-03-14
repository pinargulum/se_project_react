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
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
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
  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(closeActiveModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }
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
  function handleCardDelete() {
    const token = localStorage.getItem("token");
    const item = selectedCard._id;
    const makeRequest = () => {
      return Api.deleteItem(item, token).then((cardData) => {
        getUserData(cardData.token);
        setIsLoggedIn(true);
        setClothingItems((prewItems) =>
          prewItems.filter((prewItem) => prewItem._id !== item),
        );
      });
    };
    handleSubmit(makeRequest);
  }
  // add new item
  function handleAddItemSubmit(newItem) {
    const token = localStorage.getItem("token");
    const makeRequest = () => {
      return Api.addClothingItem(newItem, token).then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
      });
    };
    handleSubmit(makeRequest);
  }

  // like && dislike cards
  const handleCardLike = (id, isLiked) => {
    const token = localStorage.getItem("token");
    if (!isLiked) {
      Api.addCardLike(id, token)

        .then((updatedItem) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedItem : item)),
          );
        })
        .catch((err) => console.log(err));
    } else {
      Api.removeCardLike(id, token)
        .then((updatedItem) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedItem : item)),
          );
        })
        .catch((err) => console.log(err));
    }
  };

  //////////////////////   USER    //////////////////////////
  // function to get the user data
  function getUserData() {
    const token = localStorage.getItem("token");
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

    const makeRequest = (data) => {
      return auth.updateProfile(token, name, avatar).then(() => {
        getUserData(data);
      });
    };
    handleSubmit(makeRequest);
  };

  //login function
  const handleLogin = (email, password) => {
    if ((!email, !password)) {
      return;
    }
    auth
      .loginUser(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        getUserData(data);
        setIsLoggedIn(true);
        setCurrentUser(currentUser);
        closeActiveModal();
      })
      .catch(console.error);
  };
  //register function
  const handleCreateUser = (email, password, name, avatar) => {
    auth.registerUser(email, password, name, avatar).then((userData) => {
      handleLogin(email, password);
      closeActiveModal();
    });
  };
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  }

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
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      isOpen={activeModal === "profile"}
                      handleCardClick={handleCardClick}
                      onCardLike={handleCardLike}
                      clothingItems={clothingItems}
                      handleProfileAddItem={handleAddClick}
                      handleEditClick={handleEditClick}
                      isLoggedIn={isLoggedIn}
                      handleLogout={handleLogout}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/signin"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    isPublic={true}
                  >
                    <signin />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    isPublic={true}
                  >
                    <signup />
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

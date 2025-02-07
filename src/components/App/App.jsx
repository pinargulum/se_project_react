import "./App.css";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header.jsx";
import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Footer from "../Footer/Footer.jsx";
import AddItemModal from "../ModalWithForm/AddItemModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { getWeather, getCurrentWeather } from "/src/utils/weatherApi.js";
import { getToken, setToken } from "../../utils/token.js";
import { coordinates, APIkey } from "/src/utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../utils/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import Api from "../../utils/Api.js";
import * as auth from "../../utils/auth.js";

function App() {
  const navigate = useNavigate;
  const location = useLocation();
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSlectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSlectedCard(card);
  };
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

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
  //USEEFFECTS
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const locationWeather = getCurrentWeather(data);
        setWeatherData(locationWeather);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    Api.getClothingItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  const closeActiveModal = () => {
    setActiveModal("");
  };
  const loginModal = () => {
    setActiveModal("signin");
  };
  const registerModal = () => {
    setActiveModal("signup");
  };
  const handleReqister = ({ email, password, name, avatar }) => {
    auth
      .registerUser(email, password, name, avatar)
      .then((data) => {
       
       setUserData(data);
        //navigate("/signup");
        closeActiveModal("signup")
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .loginUser(email, password)
      .then((data) => {
        if (data.jwt) {
          setToken(data.jwt);
          
        }
        setUserData(data)
        closeActiveModal()
      })
      .catch(console.error);
  };
  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }
  });
  return (
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
              path="/Profile"
              element={
              <ProtectedRoute>
                <Profile
                  userData={userData}
                  onCardClick={handleCardClick}
                  profileItems={clothingItems}
                  handleProfileAddItem={handleAddClick}
                />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <RegisterModal
                  
                />
              }
            />
            <Route
              path="/signin"
              element={<LoginModal />}
            />
          </Routes>
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onAddItem={handleAddItemSubmit}
            onCloseModal={closeActiveModal}
            isLoading={isLoading}
          />
          <RegisterModal
            isOpen={activeModal === "signup"}
            onClose={closeActiveModal}
            newUser={handleReqister}
          />
          <LoginModal
            isOpen={activeModal === "signin"}
            onClose={closeActiveModal}
            handleLogin={handleLogin}
            
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
  );
}

export default App;

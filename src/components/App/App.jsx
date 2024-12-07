import Header from "../Header/Header.jsx";
import "./App.css";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useState } from "react";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Footer from "../Footer/Footer.jsx";
import { useEffect } from "react";
import { getWeather, filterWeatherData } from "/src/utils/weatherApi.js";
import { coordinates, APIkey } from "/src/utils/constant.js";
import CurrentTemperatureUnitContext from "../CurrentTemperatureUnitContext/CurrentTemperatureUnitContext.jsx";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSlectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const handleToggleSwichChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSlectedCard(card);
  };
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwichChange }}
      >
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/Profile"
              element={<Profile onCardClick={handleCardClick} />}
            />
          </Routes>

          <Footer />
          <ModalWithForm
            buttonText="Add garment"
            titleText="New garment"
            onClose={closeActiveModal}
            isOpen={activeModal === "add-garment"}
          >
            <label htmlFor="name" className="modal__label">
              Name
              <input
                type="text"
                className="modal__input"
                id="name"
                placeholder="Name"
              />
            </label>
            <label htmlFor="imageURL" className="modal__label">
              Image
              <input
                type="text"
                className="modal__input"
                id="imageURL"
                placeholder="ImageURL"
              />
            </label>
            <fieldset className="modal__radio-buttons">
              <legend className="modal__legend">
                Select the weather type:
              </legend>
              <label htmlFor="hot" className="modal__radio-label">
                Hot
                <input
                  id="hot"
                  name="radio"
                  type="radio"
                  className="modal__radio-input"
                />
              </label>
              <label htmlFor="warm" name="radio" className="modal__radio-label">
                Warm
                <input
                  id="warm"
                  name="radio"
                  type="radio"
                  className="modal__radio-input"
                />
              </label>
              <label htmlFor="cold" name="radio" className="modal__radio-label">
                Cold
                <input
                  id="cold"
                  type="radio"
                  name="radio"
                  className="modal__radio-input"
                />
              </label>
            </fieldset>
          </ModalWithForm>
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;

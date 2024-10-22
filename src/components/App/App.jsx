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

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSlectedCard] = useState({});

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
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />

        <ModalWithForm
          buttonText="Add garment"
          titleText="New garment"
          //activeModal={activeModal}
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
            <legend className="modal__legend">Select the weather type:</legend>
            <label htmlFor="hot" className="modal__radio-label">
              Hot
              <input id="hot" type="radio" className="modal__radio-input" />
            </label>
            <label htmlFor="warm" className="modal__radio-label">
              Warm
              <input id="warm" type="radio" className="modal__radio-input" />
            </label>
            <label htmlFor="cold" className="modal__radio-label">
              Cold
              <input id="cold" type="radio" className="modal__radio-input" />
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header.jsx";
import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Footer from "../Footer/Footer.jsx";
import AddItemModal from "../ModalWithForm/AddItemModal.jsx";
import { getWeather, filterWeatherData } from "/src/utils/weatherApi.js";
import { coordinates, APIkey } from "/src/utils/constant.js";
import CurrentTemperatureUnitContext from "../CurrentTemperatureUnitContext/CurrentTemperatureUnitContext.jsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";

import Api from "../../utils/Api.js";

function App() {
  //USESTATE
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSlectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  //HANDLE EVENTS
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
  function handleAddItemSubmit(newItem) {
    Api.addClothingItem(newItem)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
      })
      .catch(console.error);
  }
  const handleCardDelete = () => {
    if(selectedCard) {
    Api.deleteClothingItem(selectedCard._id)

      .then(() => {
        
        setClothingItems((prevItems) => {
          prevItems.filter((item) => item._id !== selectedCard._id)
        })
      
closeActiveModal();
        })

        .catch(console.error);
      }
    }
  

  //USEEFFECTS
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
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
                  handleCardDelete={handleCardDelete}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/Profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  profileItems={clothingItems}
                  weatherData={weatherData}
                />
              }
            />
          </Routes>
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onAddItem={handleAddItemSubmit}
            onCloseModal={closeActiveModal}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            handleCardDelete={handleCardDelete}
            item={selectedCard}
          />
          <Footer />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;

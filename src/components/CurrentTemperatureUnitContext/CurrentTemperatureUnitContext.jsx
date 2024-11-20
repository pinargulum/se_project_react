import React from "react";
const CurrentTemperatureUnitContext = React.createContext({
   
  currentTemperatureUnit: "",
  handleToggleSwichChange: () => {},
});

export default CurrentTemperatureUnitContext;

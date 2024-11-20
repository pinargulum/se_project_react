import React from "react";
const currentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwichChange: () => {},
});

export { currentTemperatureUnitContext };

import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [tempLongitude, setTempLongitude] = useState(115.092);
  const [tempLatitude, setTempLatitude] = useState(-8.3405);
  const [center, setCenter] = useState([-8.3405, 115.092]);
  const [zoom, setZoom] = useState(10);

  const moveFocusPoint = (lat, long) => {
    setCenter([lat, long]);
    setZoom(12);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        tempLongitude,
        tempLatitude,
        setTempLongitude,
        setTempLatitude,
        moveFocusPoint,
        center,
        zoom,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);

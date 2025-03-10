import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  const updateLongitude = (longitude) => {
    setLongitude(longitude);
  };
  const updateLatitude = (latitude) => {
    setLatitude(latitude);
  };

  const [activeMenu, setActiveMenu] = useState("");
  const [points, setPoints] = useState([
    {
      id: 1,
      lat: 51.505,
      lng: -0.09,
      title: "London",
      description: "The capital of England",
    },
  ]);
  const [centerPoint, setCenterPoint] = useState([
    points[0].lat,
    points[0].lng,
  ]);
  const [allowDragPointId, setAllowDragPointId] = useState(null);

  const allowDrag = (pointId) => {
    setAllowDragPointId(pointId);
  };
  const resetAllowDrag = () => {
    setAllowDragPointId(null);
  };

  const [lines, setLines] = useState([]);
  const [polygons, setPolygons] = useState([]);
  const [zoom, setZoom] = useState(3);

  const changeMenu = (menu) => {
    setActiveMenu(menu);
    console.log("Menu: ", menu);
  };

  const addPoint = (point) => {
    setPoints([...points, point]);
    console.log("New Point: ", point);
  };

  const deleteLastPoint = () => {
    setPoints(points.slice(0, -1));
  };

  const updatePoint = ({ id, lat, lng, title, description }) => {
    const newPoints = points.map((point) => {
      if (point.id === id) {
        return { id, lat, lng, title, description };
      }
      return point;
    });
    setPoints(newPoints);
    updateLatitude(lat);
    updateLongitude(lng);
    console.log("Updated Point: ", { id, lat, lng, title, description });
  };

  const moveFocusPoint = (pointId) => {
    const point = points.find((p) => p.id === pointId);
    if (point) {
      setCenterPoint([point.lat, point.lng]);
      setZoom(15);
      console.log("Focus Point: ", point);
      console.log("Center Point: ", centerPoint);
      console.log("Zoom: ", zoom);
    }
  };

  return (
    <GlobalStateContext.Provider
      value={{
        activeMenu,
        changeMenu,
        points,
        addPoint,
        deleteLastPoint,
        updatePoint,
        latitude,
        updateLatitude,
        longitude,
        updateLongitude,
        centerPoint,
        allowDrag,
        resetAllowDrag,
        allowDragPointId,
        zoom,
        moveFocusPoint,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);

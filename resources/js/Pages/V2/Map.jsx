import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { useGlobalState } from "./State/Global";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapUpdater = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    if (center && zoom) {
      map.flyTo(center, zoom, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [center, zoom, map]);

  return null;
};

const Map = ({ points = [], state }) => {
  const {
    tempLongitude,
    tempLatitude,
    setTempLongitude,
    setTempLatitude,
    center,
    zoom,
  } = useGlobalState();

  const handleDragEnd = (e, pointId) => {
    const { lat, lng } = e.target.getLatLng();
    setTempLatitude(lat);
    setTempLongitude(lng);
    console.log("New position:", lat, lng);
  };

  if (!Array.isArray(points)) {
    points = Object.values(points);
  }

  console.log("points:", points);

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: "100vh" }}>
      <MapUpdater center={center} zoom={zoom} />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">'
      />
      {/* Polyline connecting all points */}
      {points.length > 1 && (
        <Polyline
          positions={points.map((point) => [point.latitude, point.longitude])}
          color="blue"
        />
      )}

      {Array.isArray(points) &&
        points.map((point) => (
          <Marker
            position={[point.latitude, point.longitude]}
            key={point.id}
            eventHandlers={{ dragend: (e) => handleDragEnd(e, point.id) }}
          >
            <Popup>
              <div>
                <h3 className="font-bold">{point.name}</h3>
                <span>{point.description}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      {/* Temp marker */}
      {state == "add_point" && (
        <Marker
          position={[tempLatitude, tempLongitude]}
          draggable={true}
          eventHandlers={{ dragend: (e) => handleDragEnd(e, -1) }}
        ></Marker>
      )}
    </MapContainer>
  );
};

export default Map;

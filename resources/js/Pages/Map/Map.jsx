import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGlobalState } from "@/State/Global";
import { useEffect } from "react";

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

const Map = () => {
  const { points, updatePoint, allowDragPointId, centerPoint, zoom } =
    useGlobalState();

  const handleDragEnd = (e, pointId) => {
    const { lat, lng } = e.target.getLatLng();
    const updatedPoint = points.find((p) => p.id === pointId);
    if (updatedPoint) {
      updatePoint({ ...updatedPoint, lat, lng });
    }
    console.log("New position:", lat, lng);
  };

  return (
    <MapContainer center={centerPoint} zoom={zoom} style={{ height: "100vh" }}>
      {/* This handles map view updates */}
      <MapUpdater center={centerPoint} zoom={zoom} />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">'
      />
      {points.map((point) => (
        <Marker
          position={[point.lat, point.lng]}
          key={point.id}
          draggable={allowDragPointId === point.id}
          eventHandlers={{ dragend: (e) => handleDragEnd(e, point.id) }}
        >
          <Popup>
            <div>
              <h3 className="font-bold">{point.title}</h3>
              <span>{point.description}</span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGlobalState } from "@/State/Global";

const Map = () => {
  const { points, updatePoint } = useGlobalState();

  const handleDragEnd = (e, pointId) => {
    const { lat, lng } = e.target.getLatLng();
    const updatedPoint = points.find((p) => p.id === pointId);
    if (updatedPoint) {
      updatePoint({ ...updatedPoint, lat, lng });
    }
    console.log("New position:", lat, lng);
  };

  return (
    <MapContainer
      center={[points[0].lat, points[0].lng]}
      zoom={3}
      style={{ height: "100vh" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">'
      />
      {points.map((point) => (
        <Marker
          position={[point.lat, point.lng]}
          key={point.id}
          draggable={true}
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

import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/pin";

function Map({ item }) {

  console.log(item);

  return (
    <MapContainer
      center={[51.5074, -0.1278]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    {
            item?.map((it) => (
              <Pin key={it.id} item={it} />
            ))      
    }
      
    </MapContainer>
  );
}

export default Map;
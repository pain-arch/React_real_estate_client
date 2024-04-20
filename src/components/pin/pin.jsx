import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ data }) {
  return (
    <Marker position={[data.latitude, data.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={data.img} alt="" />
          <div className="textContainer">
            <Link to={`/${data.id}`}>{data.title}</Link>
            <span>{data.bedroom} bedroom</span>
            <b>$ {data.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
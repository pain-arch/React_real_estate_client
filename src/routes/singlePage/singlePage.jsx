import Slider from "../../components/slider/slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummyData.js";
import Map from "../../components/map/map.jsx";

function SinglePage() {
  return (
    <div className="singlePage">

      {/* Right side top section with image slider and post info */}
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin_icon" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>

      {/* left side features section */}

      {/* General part */}
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="icon" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>

            <div className="feature">
              <img src="/pet.png" alt="pet" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>

            <div className="feature">
              <img src="/fee.png" alt="bed" />
              <div className="featureText">
                <span>Poperty Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>

          {/* Room sizes part */}
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="size_icon" />
              <span>80 sqft</span>
            </div>

            <div className="size">
              <img src="/bed.png" alt="size_icon" />
              <span>2 bed</span>
            </div>

            <div className="size">
              <img src="/bath.png" alt="size_icon" />
              <span>1 bathroom</span>
            </div>
          </div>

          {/* Nearby places part */}
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          {/* map part */}
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="chat" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="save" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

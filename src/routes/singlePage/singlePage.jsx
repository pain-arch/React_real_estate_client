import Slider from "../../components/slider/slider";
import "./singlePage.scss";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider />
          <div className="info">
            <div className="top"> top</div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          feat
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

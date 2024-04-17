import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate Properties That Are Right For You
          </h1>
          <p className="description">
            Are you embarking on the exciting journey of finding your dream home
            or investment property? With the vast array of options available,
            its essential to navigate the real estate market with confidence
            and clarity.
          </p>
          {/* searchbar component */}
          <SearchBar />
          {/* box part */}
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained </h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="hero_bg" />
      </div>
    </div>
  );
}

export default HomePage;

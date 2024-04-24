import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav className="navbar">
      <div className="left">
        <Link to={'/'} className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Real Estate</span>
        </Link>
        <Link to={'/'}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Agents</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div className="right">
        {
          user ? (<div className="user">
            <img src="https://avatars.githubusercontent.com/u/61962850?s=400&u=5e8ba51a235a1cfc92ea021106dd78894de317eb&v=4" alt="Profile" />
            <span>John Doe</span>
            <Link to={'/profile'} className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>): (<>
            <a href="/login" className="login_btn">Login</a>
            <a href="/register" className="register_btn">Sign Up</a>
            </>)
        }
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="Menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to={'/'}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/services"}>Agents</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

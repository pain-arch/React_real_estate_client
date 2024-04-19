import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

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
        <a href="/login" className="login_btn">
          Login
        </a>
        <a href="/register" className="register_btn">
          Sign Up
        </a>
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

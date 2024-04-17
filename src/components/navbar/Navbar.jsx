import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Real Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Agents</a>
        <a href="/contact">Contact</a>
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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Agents</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/register">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

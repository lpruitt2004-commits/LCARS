import React from "react";
import { Link, Outlet } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/encyclopedia", label: "Encyclopedia" },
];

const LCARSLayout = () => (
  <div className="lcars-layout">
    <header className="lcars-header">
      <h2>LCARS Encyclopedia</h2>
    </header>
    <nav className="lcars-nav">
      {navLinks.map((link) => (
        <Link key={link.to} to={link.to} className="lcars-nav-link">
          {link.label}
        </Link>
      ))}
    </nav>
    <main className="lcars-main">
      <Outlet />
    </main>
  </div>
);

export default LCARSLayout;

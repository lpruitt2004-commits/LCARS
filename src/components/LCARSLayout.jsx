import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Breadcrumbs from "./Breadcrumbs";
import { useSound } from "./SoundManager";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/encyclopedia", label: "Encyclopedia" },
  { to: "/captains-log", label: "Captain's Log" },
];

const LCARSLayout = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { playClick, ambientOn, toggleAmbient } = useSound();

  const handleSearch = () => {
    if (search.trim()) {
      playClick();
      navigate(`/encyclopedia?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <div className="lcars-layout">
      <header className="lcars-header">
        <h2>LCARS Encyclopedia</h2>
      </header>
      <SearchBar
        value={search}
        onChange={setSearch}
        onSearch={handleSearch}
        playClick={playClick}
      />
      <Breadcrumbs />
      <nav className="lcars-nav" aria-label="Main Navigation">
        <ul className="lcars-nav-list">
          {navLinks.map((link) => (
            <li key={link.to} className="lcars-nav-item">
              <Link to={link.to} className="lcars-nav-link" onClick={playClick}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="lcars-main">
        <Outlet />
      </main>
    </div>
  );
};

export default LCARSLayout;

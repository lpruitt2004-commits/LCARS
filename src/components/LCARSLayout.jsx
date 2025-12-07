import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Breadcrumbs from "./Breadcrumbs";
import { useSound } from "./SoundManager";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/encyclopedia", label: "Encyclopedia" },
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
        <button className="lcars-ambient-toggle" onClick={toggleAmbient}>
          {ambientOn ? "Mute Ambient" : "Play Ambient"}
        </button>
      </header>
      <SearchBar
        value={search}
        onChange={setSearch}
        onSearch={handleSearch}
        playClick={playClick}
      />
      <Breadcrumbs />
      <nav className="lcars-nav">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="lcars-nav-link"
            onClick={playClick}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <main className="lcars-main">
        <Outlet />
      </main>
    </div>
  );
};

export default LCARSLayout;

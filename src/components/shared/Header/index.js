import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header>
      <h1 onClick={handleClick}>Podcaster</h1>
    </header>
  );
};

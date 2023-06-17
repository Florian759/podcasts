import React from "react";
import { useLoading } from "../../../contexts/loadingContext";
import { useNavigate } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  const loading = useLoading();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  loading && console.log("Loading...");

  return (
    <header>
      <h1 onClick={handleClick}>Podcaster</h1>
      {loading && (
        <div>
          <p>Loading...</p>
          <span className="loader"></span>
        </div>
      )}
    </header>
  );
};

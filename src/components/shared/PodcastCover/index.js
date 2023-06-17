import React from "react";
import "./podcast_cover.scss";

export const PodcastCover = ({ trackName, artwork, artistName, description }) => {

  return (
    <aside className="podcast-cover">
      <div className="podcast-cover-image">
        <img src={artwork} alt={trackName} />
      </div>
      <div className="podcast-cover-artist">
        <p>{trackName}</p>
        <p>by {artistName}</p>
      </div>
      <div className="podcast-cover-description">
        <p>Description:</p>
        <p>
          {description}
        </p>
      </div>
    </aside>
  );
};

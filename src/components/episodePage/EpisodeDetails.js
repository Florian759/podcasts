import React from "react";
import "./episode_details.scss";

export const EpisodeDetails = ({ title, content, url }) => {
  return (
    <div className="episode-details">
      <div className="episode-details-title">{title}</div>
      <div className="episode-details-content" dangerouslySetInnerHTML={{ __html: content }} />
      <audio id="audio" src={url} type="audio/mpeg" style={{width: "100%"}} controls />
    </div>
  );
};
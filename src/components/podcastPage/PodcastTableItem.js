import React from "react";
import { useNavigate } from "react-router-dom";

export const PodcastTableItem = ({
  podcastId,
  episodeId,
  title,
  date,
  duration,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/podcast/${podcastId}/episode/${episodeId} `);
  };

  return (
    <tr>
      <td onClick={handleClick}>{title}</td>
      <td>{new Date(date).toLocaleDateString()}</td>
      <td>{duration}</td>
    </tr>
  );
};

import { useNavigate } from "react-router-dom";
import "./podcast.scss";

export const Podcast = (propsPodcast) => {
  const { id, image, name, artist } = propsPodcast;
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/podcast/${id}`, { state: propsPodcast });
  };

  return (
    <div className="podcast">
      <div className="podcast-card" onClick={handleClick} >
        <div className="podcast-card-image-container">
          <img src={image} alt="name" />
        </div>
        <div className="podcast-card-content">
          <p className="name">{name}</p>
          <p className="author">Author: {artist}</p>
        </div>
      </div>
    </div>
  );
};

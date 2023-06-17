import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { usePodcast } from "../hooks/usePodcast";
import "./podcast_page.scss";

export const PodcastPage = () => {
  const { podcastId } = useParams();
  const { state } = useLocation();
  const { episodes, ...podcastProps } = usePodcast(podcastId, state);

  console.log(episodes, podcastProps);

  return (
    <div className="app-content podcast-page">

    </div>
  );
};

export default PodcastPage;

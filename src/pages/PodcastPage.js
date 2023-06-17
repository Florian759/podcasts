import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { usePodcast } from "../hooks/usePodcast";
import { PodcastCover } from "../components/shared/PodcastCover";
import { EpisodesTable } from "../components/podcastPage/EpisodesTable";
import "./podcast_page.scss";

export const PodcastPage = () => {
  const { podcastId } = useParams();
  const { state } = useLocation();
  const { episodes, ...podcastProps } = usePodcast(podcastId, state);

  return (
    <div className="app-content podcast-page">
      <PodcastCover {...podcastProps} />
      <EpisodesTable episodes={episodes} podcastId={podcastId} />
    </div>
  );
};

export default PodcastPage;

import React from "react";
import "./podcasts_page.scss";
import { usePodcasts } from "../hooks/usePodcasts";

export const PodcastPage = () => {
  const { list } = usePodcasts();

  console.log(list);

  return (
    <div className="app-content podcast-list-page">
     
    </div>
  );
};

export default PodcastPage;

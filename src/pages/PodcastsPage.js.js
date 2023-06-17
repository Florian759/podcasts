import React from "react";
import { usePodcastsList } from "../hooks/usePodcastList";
import "./podcasts_page.scss";

export const PodcastPage = () => {
  const { list } = usePodcastsList();

  console.log(list);

  return (
    <div className="app-content podcast-list-page">
     
    </div>
  );
};

export default PodcastPage;

import React from "react";
import { Podcast } from "../components/podcastsPage/Podcast";
import { usePodcasts } from "../hooks/usePodcasts";
import "./podcasts_page.scss";

export const PodcastsPage = () => {
  const { list } = usePodcasts();

  return (
    <div className="app-content podcasts-page">
      
      <section>
        {list.map((item) => (
          <Podcast key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
};

export default PodcastsPage;

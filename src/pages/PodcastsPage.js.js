import React from "react";
import { Podcast } from "../components/podcastsPage/Podcast";
import { usePodcasts } from "../hooks/usePodcasts";
import "./podcasts_page.scss";
import SearchBar from "../components/shared/SearchBar";

export const PodcastsPage = () => {
  const { list } = usePodcasts();

  return (
    <div className="app-content podcasts-page">
      <SearchBar numberOfPodcasts={list.length} />

      <section>
        {list.map((item) => (
          <Podcast key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
};

export default PodcastsPage;

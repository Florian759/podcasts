import React from "react";
import { Podcast } from "../components/podcastsPage/Podcast";
import { SearchBar } from "../components/shared/SearchBar";
import { usePodcasts } from "../hooks/usePodcasts";
import "./podcasts_page.scss";

export const PodcastsPage = () => {
  const { list, handleFilter } = usePodcasts();

  return (
    <div className="app-content podcasts-page">
      <SearchBar numberOfPodcasts={list.length} handleFilter={handleFilter} />
      
      <section>
        {list.map((item) => (
          <Podcast key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
};

export default PodcastsPage;

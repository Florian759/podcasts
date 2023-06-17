import { useEffect, useState } from "react";
import { getPodcasts } from "../services/podcastServices";
import { parsePodcastsList } from "../utils/parsePodcasts";

export const usePodcastsList = () => {
  const [podcastsList, setPodcastsList] = useState();
  
  useEffect(() => {
    if (podcastsList) return;

    getPodcasts()
      .then((response) => {
        setPodcastsList(parsePodcastsList(response.data));
      })
      .catch((e) => {
        console.error("Podcasts service error: ", e);
      });
  }, [podcastsList, setPodcastsList]);

  return { list: podcastsList || [] };
};

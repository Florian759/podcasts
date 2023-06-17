import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getPodcasts } from "../services/podcastServices";
import { parsePodcastsList } from "../utils/parsePodcasts";

export const usePodcastsList = () => {
  const [podcastsList, setPodcastsList] = useLocalStorage("podcasts");

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

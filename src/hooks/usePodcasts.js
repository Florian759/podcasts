import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getPodcasts } from "../services/podcastServices";
import { parsePodcastsList } from "../utils/parsePodcasts";

export const usePodcasts = () => {
  const [podcasts, setPodcasts] = useLocalStorage("podcasts");

  useEffect(() => {
    if (podcasts) return;

    getPodcasts()
      .then((response) => {
        setPodcasts(parsePodcastsList(response.data));
      })
      .catch((e) => {
        console.error("Podcasts service error: ", e);
      });
  }, [podcasts, setPodcasts]);


  return { list: podcasts || [] };
};

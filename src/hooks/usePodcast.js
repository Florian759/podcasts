import { useEffect } from "react";
import { getEpisodes, getPodcastById } from "../services/podcastServices";
import { parseEpisodes, parsePodcastItem } from "../utils/parsePodcasts";
import { useLocalStorage } from "./useLocalStorage";
import { useLoadingDispatch } from "../contexts/loadingContext";

export const usePodcast = (podcastId, propsPodcast) => {
  const [podcast, setPodcast] = useLocalStorage(podcastId);
  const dispatch = useLoadingDispatch();

  useEffect(() => {
    if (podcast || !propsPodcast) return;

    dispatch({ type: "update", payload: true });

    getPodcastById(podcastId)
      .then((response) => {
        const podcast = parsePodcastItem(response.data);

        getEpisodes(podcast.feedUrl)
          .then((response) => {
            setPodcast({
              ...podcast,
              description: propsPodcast.summary,
              episodes: parseEpisodes(response.data),
            });
            dispatch({ type: "update", payload: false });
          })
          .catch((e) => {
            console.error("PodcastsById:Episodes service error: ", e);
            dispatch({ type: "update", payload: false });
          });
      })
      .catch((e) => {
        console.error("PodcastsById service error: ", e);
        dispatch({ type: "update", payload: false });
      });
  }, [dispatch, podcastId, podcast, propsPodcast, setPodcast]);

  return podcast || { episodes: [] };
};

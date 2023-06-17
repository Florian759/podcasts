import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getPodcasts } from "../services/podcastServices";
import { parsePodcastsList } from "../utils/parsePodcasts";
import { useLoadingDispatch } from "../contexts/loadingContext";

export const usePodcasts = () => {
  const [podcasts, setPodcasts] = useLocalStorage("podcasts");
  const [podcastsFiltered, setPodcastsFiltered] = useState();
  const dispatch = useLoadingDispatch();

  useEffect(() => {
    if (podcasts) return;

    dispatch({ type: "update", payload: true });

    getPodcasts()
      .then((response) => {
        setPodcasts(parsePodcastsList(response.data));
        dispatch({ type: "update", payload: false });
      })
      .catch((e) => {
        console.error("Podcasts service error: ", e);
        dispatch({ type: "update", payload: false });
      });
  }, [dispatch, podcasts, setPodcasts]);

  const handleFilter = (e) => {
    const value = e.target?.value.toLowerCase();
    const filtered = value
      ? podcasts.filter((item) =>
          `${item.name}${item.artist}`.toLowerCase().includes(value)
        )
      : undefined;

    setPodcastsFiltered(filtered);
  };

  return { list: podcastsFiltered || podcasts || [], handleFilter };
};

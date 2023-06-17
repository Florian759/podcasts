import { useParams } from "react-router-dom";
import { PodcastCover } from "../components/shared/PodcastCover";
import { usePodcast } from "../hooks/usePodcast";
import { EpisodeDetails } from "../components/episodePage/EpisodeDetails";
import "./episode_page.scss";

export const EpisodePage = () => {
  const { podcastId, episodeId } = useParams();
  const { episodes, ...podcastProps } = usePodcast(podcastId);
  const episode = (episodes && episodes[episodeId]) || {};

  return (
    <div className="episode-page">
      <PodcastCover {...podcastProps} />
      <EpisodeDetails {...episode} />
    </div>
  );
};

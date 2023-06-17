import { useParams } from "react-router-dom";
import { PodcastCover } from "../components/shared/PodcastCover";

import "./episode_page.scss";
import { usePodcast } from "../hooks/usePodcast";

export const EpisodePage = () => {
  const { podcastId, episodeId } = useParams();
  const { episodes, ...podcastProps } = usePodcast(podcastId);
  
  return (
    <div className="episode-page">
      <PodcastCover {...podcastProps} />
      <p>
        Lorem fistrum por la gloria de mi madre está la cosa muy malar ese
        pedazo de condemor qué dise usteer al ataquerl caballo blanco caballo
        negroorl papaar papaar la caidita.
      </p>
    </div>
  );
};

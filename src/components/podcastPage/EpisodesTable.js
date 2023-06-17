import React, { useCallback, useRef, useState } from "react";
import { PodcastTableItem } from "./PodcastTableItem";
import "./episodes_table.scss";

export const EpisodesTable = ({ episodes, podcastId }) => {
  const [episodesShowLimit, setEpisodesShowLimit] = useState(20);
  const tableRef = useRef();

  const handleShowLimitClick = useCallback(() => {
    const newLimit = episodesShowLimit + 20;
    const limit = newLimit <= episodes.length ? newLimit : episodes.length;

    setEpisodesShowLimit(limit);

    setTimeout(() => {
      tableRef.current.scrollTop = 99999999;
    }, 20);
  }, [episodes.length, episodesShowLimit, tableRef]);

  return (
    <div className="episodes-table">
      <div className="episodes-table-count">Episodes: {episodes.length}</div>
      <div className="episodes-table-content" ref={tableRef}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {[...episodes].splice(0, episodesShowLimit).map((item, index) => (
              <PodcastTableItem
                key={item.guid}
                podcastId={podcastId}
                episodeId={index}
                {...item}
              />
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleShowLimitClick} className="episodes-table-button">
        Show more...
      </button>
    </div>
  );
};

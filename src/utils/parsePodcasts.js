const ID_ROUTE = ["id", "attributes", "im:id"];
const IMAGE_ROUTE = ["im:image", "2", "label"];
const NAME_ROUTE = ["im:name", "label"];
const ARTIST_ROUTE = ["im:artist", "label"];
const SUMMARY_ROUTE = ["summary", "label"];

function getValueByRoute(item, route) {
  let result = item;

  route.forEach((value) => {
    if (result) result = result[value];
  });

  return result;
}

function findXMLElement(node, selector, attributeName) {
  const found = node.querySelectorAll(selector);

  return found.length
    ? attributeName
      ? found[0].attributes[attributeName].value
      : found[0].textContent
    : undefined;
}

export function parsePodcastsList(data) {
  if (!data) return;

  let items = [];

  data?.feed?.entry?.forEach((item) => {
    items.push({
      id: getValueByRoute(item, ID_ROUTE),
      image: getValueByRoute(item, IMAGE_ROUTE),
      name: getValueByRoute(item, NAME_ROUTE),
      artist: getValueByRoute(item, ARTIST_ROUTE),
      summary: getValueByRoute(item, SUMMARY_ROUTE),
    });
  });

  return items;
}

export function parsePodcastItem(data) {
  if (!data?.results?.length) return;

  const {
    trackId,
    artworkUrl600: artwork,
    trackName,
    feedUrl,
    artistName,
  } = data.results[0];

  return {
    trackId,
    artwork,
    trackName,
    feedUrl,
    artistName,
  };
}

export function parseEpisodes(data) {
  const doc = new DOMParser().parseFromString(data, "application/xml");
  const items = doc.querySelectorAll("item");

  let episodes = [];

  items.forEach((item) => {
    episodes.push({
      guid: findXMLElement(item, "guid"),
      title: findXMLElement(item, "title"),
      date: findXMLElement(item, "pubDate"),
      duration: findXMLElement(item, "duration"),
      content: findXMLElement(item, "encoded"),
      url: findXMLElement(item, "enclosure", "url"),
    });
  });

  return episodes;
}

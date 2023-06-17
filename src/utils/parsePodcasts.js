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

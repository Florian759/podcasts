import axios from 'axios';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const URL_PODCASTS = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
const URL_PODCAST_ID = 'https://itunes.apple.com/lookup?id=';

export const getPodcasts = () => axios({
	method: 'get',
	url: `${CORS_PROXY}${URL_PODCASTS}`,
});

export const getPodcastById = (id) => axios({
	method: 'get',
	url: `${CORS_PROXY}${URL_PODCAST_ID}${id}`,
});

export const getEpisodes = (url) => axios({
	method: 'get',
	url: `${CORS_PROXY}${url}`,
});
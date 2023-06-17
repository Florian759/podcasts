import axios from 'axios';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const URL_PODCASTS = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

export const getPodcasts = () => axios({
	method: 'get',
	url: `${CORS_PROXY}${URL_PODCASTS}`,
});

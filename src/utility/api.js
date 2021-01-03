import { getRandomNumber } from './utils';

import {
	endpoint,
	show,
} from './constants';

export const fetchData = async () => {
	let response = await fetch(`${endpoint}&t=${show}`);
	return await response.json();
};

export const getRandomSeason = async () => {
	const show = await fetchData();

	return getRandomNumber(show.totalSeasons);
};

export const getRandomEpisode = async () => {
	const season = await getRandomSeason();
	let response = await (await fetch(`${endpoint}&t=${show}&season=${season}`)).json();
	
	let episode = await getRandomNumber(response.Episodes.length);

	let result = await (await fetch(`${endpoint}&t=${show}&season=${season}&episode=${episode}`)).json();

	return await result
};
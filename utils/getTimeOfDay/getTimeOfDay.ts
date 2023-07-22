/**
 * Determines whether it is night or day based on the current hour.
 * @returns A string representing the current time of day: '🌑' for night, '☀️' for day.
 */
const getTimeOfDay = () => {
	const hour = new Date().getHours();
	const [nightStarts, nightFinish] = [20, 6];
	const isNight = hour >= nightStarts || hour <= nightFinish;

	return isNight ? "🌑" : "☀️";
};

export default getTimeOfDay;

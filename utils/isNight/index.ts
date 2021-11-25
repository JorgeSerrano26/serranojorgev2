const isNight = () => {
    const hour = new Date().getHours();
    const [nightsFinish, nightStarts] = [6, 20];
    const isNight = hour >= nightsFinish && hour <= nightStarts;

    return isNight ? '🌑' : '☀️';
};

export default isNight;
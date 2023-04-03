/**
 * Dependencies
 */
import { useEffect, useState } from 'react';
import { IConfiguration } from './types';

/**
 * Initial configuration
 */
enum INIT_CONFIG {
    NIGHT_STARTS = 20,
    NIGHT_FINISH = 6,
    REFRESH = 1000 
}

const initConfig: IConfiguration = {
    nightStarts: INIT_CONFIG.NIGHT_STARTS,
    nightsFinish: INIT_CONFIG.NIGHT_FINISH,
};

/**
 * Check if the current hour is between two hours
 * @param {IConfiguration} configuration
 * @returns
 * - icon: sun or moon
 * - isNight: boolean
 */
const useIsNight = ({
    nightStarts = INIT_CONFIG.NIGHT_STARTS,
    nightsFinish = INIT_CONFIG.NIGHT_FINISH,
}: IConfiguration = initConfig) => {
    const [isNight, setIsNight] = useState(false);

    /**
     * Check if it is night
     * @returns True if the hour is beteewn {nightStarts} and {nightsFinish}
     */
    const checkIsNight = () => {
        const currentHour = new Date().getHours();
        return !(nightsFinish <= currentHour && currentHour < nightStarts);
    };

    useEffect(() => {
        const intervalTime = setInterval(() => {
            setIsNight(() => checkIsNight());
        }, INIT_CONFIG.REFRESH);

        return clearInterval(intervalTime);
    }, []);

    return { icon: isNight ? '🌑' : '☀️', isNight } as const;
};

/**
 * Export hook
 */
export default useIsNight;

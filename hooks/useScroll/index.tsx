/**
 * Dependencies
 */
import { useState, useEffect } from 'react';
import { TScroll } from './types';

/**
 * Hooks that returns offset in X and Y
 * @returns
 */
const useScrollHook = (): TScroll => {
    const [offset, setOffset] = useState<TScroll>({ offsetX: 0, offsetY: 0 });

    /**
     *  Set the state offset with the values
     */
    const saveScroll = () => {
        setOffset(() => ({
            offsetX: window.scrollX,
            offsetY: window.scrollY,
        }));
    };

    useEffect(() => {
        window.onscroll = saveScroll;

        return () => {
            window.onscroll = null;
        };
    }, []);

    return { ...offset } as const;
};

/**
 * Export hook
 */
export default useScrollHook;

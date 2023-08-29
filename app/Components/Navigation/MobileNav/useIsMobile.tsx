"use client"
import {useEffect, useState} from "react";

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

const MOBILE_SIZE = 562;

const isServer = typeof window === 'undefined';

const useIsMobile = () => {
    const getIsMobile = (): boolean => window.innerWidth < MOBILE_SIZE;
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        if (!isServer) {
            setIsMobile(false);
        }
        const processChange = debounce(() => setIsMobile(getIsMobile()), 100);
        window.addEventListener('resize', processChange);
        processChange();
        
        return () => window.removeEventListener('resize', processChange);
    }, []);

    return isMobile;
};
export default useIsMobile;
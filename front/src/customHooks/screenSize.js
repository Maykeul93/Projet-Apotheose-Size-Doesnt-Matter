import { useState, useEffect } from 'react';

const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return width;
}

const useWidthDimension = () => {
    const [ windowWidth, setWindowWidth ] = useState(getWindowWidth());

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('resize', handleResize);
    }, []);

    return windowWidth;
}

export default useWidthDimension; 
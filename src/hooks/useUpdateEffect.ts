import { useEffect, useRef } from 'react';

export default (cb: () => void, ...dep: any[]) => {
    const firstCall = useRef(true);
    useEffect(() => {
        if (firstCall.current) {
            firstCall.current = false;
            return;
        }
        cb();
    }, [...dep, cb]);
};
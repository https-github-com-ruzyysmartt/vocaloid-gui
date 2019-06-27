import { useEffect, useMemo, useState } from 'react';

export default (dom: HTMLElement|null) => {
    dom = dom || document.body;
    const [lastWidth, setLastWidth] = useState(dom ? dom.offsetWidth : 0);
    const [lastHeight, setLastHeight] = useState(dom ? dom.offsetHeight : 0);
    const onResize = useMemo(() => {
        return (e: UIEvent) => {
            if (dom) {
                let width = dom.offsetWidth;
                let height = dom.offsetHeight;
                if (width === lastWidth && height === lastHeight) return;
                setLastWidth(width);
                setLastHeight(height);
            } else {
                setLastWidth(0);
                setLastHeight(0);
            }
        };
    }, [dom]);
    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [onResize]);
    return {
        width: lastWidth,
        height: lastHeight
    };
};
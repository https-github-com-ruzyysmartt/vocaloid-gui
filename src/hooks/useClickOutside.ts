import { useEffect, useMemo } from 'react';

export default (dom: HTMLElement|null, onClickOutside?: (e: MouseEvent) => void, e: 'mousedown'|'mouseup'|'click' = 'click') => {
    const onGlobalClick = useMemo(() => {
        return (e: Event) => {
            const target = (e.target as HTMLElement);
            if (dom && (dom.contains(target) || dom === target)) return;
            onClickOutside && onClickOutside(e as MouseEvent);
        };
    }, [dom, onClickOutside]);
    useEffect(() => {
        document.body.addEventListener(e, onGlobalClick);
        return () => {
            document.body.removeEventListener(e, onGlobalClick);
        };
    }, [onGlobalClick, e]);
};
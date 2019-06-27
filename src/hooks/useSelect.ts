import React from 'react';
import distance from '../utils/distance';
import { DELTA_FOR_DRAG_DETECTION } from '../constant';

function useSelect(selectedItemIds?: Dictionary<string>, onSelectedItemsChange?: (v: Dictionary<string>) => void, multiple?: boolean) {
    const ids = selectedItemIds || {};
    const onChange = (v: Dictionary<string>) => onSelectedItemsChange && onSelectedItemsChange(v);
    let pos = { x: 0, y: 0 };
    let lastId = '';
    const onMouseUp = (e: MouseEvent) => {
        document.body.removeEventListener('mouseup', onMouseUp);
        if (ids[lastId] && distance(pos, { x: e.pageX, y: e.pageY }) <= DELTA_FOR_DRAG_DETECTION) {
            if (e.ctrlKey && multiple) {
                let newSelecteds = { ...ids };
                Reflect.deleteProperty(newSelecteds, lastId);
                onChange(newSelecteds);
            } else {
                onChange({ [lastId]: lastId });
            }
        }
    };
    const onMouseDown = (e: React.MouseEvent, id: string) => {
        if (ids[id] === undefined) {
            if (e.ctrlKey && multiple) {
                let newSelecteds = { ...ids };
                newSelecteds[id] = id;
                onChange(newSelecteds);
            }
            // Single
            else {
                onChange({ [id]: id });
            }
        } else {
            lastId = id;
            pos.x = e.pageX;
            pos.y = e.pageY;
            document.body.addEventListener('mouseup', onMouseUp);
        }
    };
    return onMouseDown;
}

export default useSelect;
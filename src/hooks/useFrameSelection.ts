import useMovement from './useMovement';
import { getBounds, boundsOverlap } from '../utils/bounds';
import clientRectToAABB from '../utils/clientRectToAABB';
import { EMPTY_DICT } from '../constant';

const aabb = { x: 0, y: 0, width: 0, height: 0 };

function useFrameSelection(collection: HTMLCollection|NodeListOf<HTMLElement>|null, dataset?: boolean) {
    const dragInfo = useMovement(undefined, 16);
    const hasDown = dragInfo.hasDown;
    const isDragging = dragInfo.isDragging;
    const active = hasDown && isDragging;
    const dropped = !hasDown && isDragging;
    const downPos = dragInfo.downPos;
    const curPos = dragInfo.curPos;
    const bounds = getBounds(curPos, downPos);

    let selected: Dictionary<string>|undefined;
    if (dropped && collection) {
        for (let i = 0, count = collection.length; i < count; i++) {
            const child = collection[i] as HTMLElement;
            clientRectToAABB(child.getBoundingClientRect(), aabb);
            if (boundsOverlap(aabb, bounds)) {
                let id = dataset ? child.dataset.id : child.id;
                if (id) {
                    if (!selected)selected = {};
                    selected[id] = id;
                }
            }
        }
    }
    return {
        onMouseDown: dragInfo.onMouseDown,
        active,
        bounds,
        selected: selected || EMPTY_DICT
    };
}

export default useFrameSelection;
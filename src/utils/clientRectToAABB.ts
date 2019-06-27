export default (rect: ClientRect|DOMRect, out?: AABB) => {
    out = out || { x: 0, y: 0, width: 0, height: 0 };
    out.x = rect.left;
    out.y = rect.top;
    out.width = rect.width;
    out.height = rect.height;
    return out;
};
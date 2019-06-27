export default (x: number) => {
    let i = ~~(x / 2);
    for (i; i > 1; i--) {
        if (x % i === 0) break;
    }
    return i;
};
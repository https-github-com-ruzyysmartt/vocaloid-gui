export default (n: number, num: number) => {
    return (Array(n).join('0') + num).slice(-n);
};
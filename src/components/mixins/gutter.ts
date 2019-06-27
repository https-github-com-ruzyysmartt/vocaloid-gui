export default (gutter: number, padding?: boolean, vertical?: boolean) => {
    const direction = `${padding ? 'padding' : 'margin'}${vertical ? 'Bottom' : 'Right'}`;
    return {
        '&>*': {
            [direction]: `${gutter}px`,
            '&:last-child': {
                [direction]: 0
            }
        }
    };
};
export default (color: string) => {
    return {
        '::-webkit-input-placeholder': {
            color
        },
        ':-moz-placeholder': {
            color
        },
        '::-moz-placeholder': {
            color
        },
        ':-ms-input-placeholder': {
            color
        },
    };
};
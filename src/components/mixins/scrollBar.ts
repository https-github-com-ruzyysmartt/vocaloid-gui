export default (scrollBar: ScrollBarProperties) => {
    return {
        '::-webkit-scrollbar': {
            width: `${scrollBar.width}px`,
            height: `${scrollBar.width}px`
        },
        '::-webkit-scrollbar-track': {
            backgroundColor: scrollBar.trackBackgroundColor
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: scrollBar.thumbBackgroundColor,
            borderRadius: `${scrollBar.width}px`
        },
        '::-webkit-scrollbar-corner': {
            background: 'transparent'
        }
    };
};
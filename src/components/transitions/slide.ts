export default {
    '.slide-enter, .slide-exit-done': {
        opacity: 0,
        transform: 'scaleX(0)'
    },
    '.slide-enter-active': {
        opacity: 1,
        transform: 'scaleX(1)',
        transition: 'opacity 300ms, transform 300ms'
    },
    '.slide-exit, .slide-enter-done': {
        opacity: 1,
        transform: 'scaleX(1)'
    },
    '.slide-exit-active': {
        opacity: 0,
        transform: 'scaleX(0)',
        transition: 'opacity 300ms, transform 300ms'
    }
};
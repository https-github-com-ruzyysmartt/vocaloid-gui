export default {
    '.scale-enter, .scale-exit-done': {
        opacity: 0,
        transform: 'scale(0.9)'
    },
    '.scale-enter-active': {
        opacity: 1,
        transform: 'translateX(0)',
        transition: 'opacity 300ms, transform 300ms'
    },
    '.scale-exit, .scale-enter-done': {
        opacity: 1
    },
    '.scale-exit-active': {
        opacity: 0,
        transform: 'scale(0.9)',
        transition: 'opacity 300ms, transform 300ms'
    }
};
export default {
    '.fade-enter, .fade-exit-done': {
        opacity: 0
    },
    '.fade-enter-active': {
        opacity: 1,
        transition: 'opacity 300ms'
    },
    '.fade-exit, .fade-enter-done': {
        opacity: 1
    },
    '.fade-exit-active': {
        opacity: 0,
        transition: 'opacity 300ms'
    }
};
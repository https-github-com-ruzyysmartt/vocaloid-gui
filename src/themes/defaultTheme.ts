export default {
    palette: {
        primary: {
            color: '#8d5eec',
            contrastText: '#fff'
        },
        default: {
            color: '#666',
            contrastText: '#c0c0c0'
        },
        border: {
            divider: '#161616',
            border: '#464646'
        },
        background: {
            surface: '#333333',
            body: '#1f1f1f',
            panel: '#363636',
            contrastText: '#c0c0c0'
        },
        action: {
            hover: -0.08,
            active: 0.12,
            selected: 0.14,
            borderColorSelected: '#d3a82a',
            disabledOpacity: 0.7
        },
        mask: 'rgba(0, 0, 0, 0.4)'
    },
    typography: {
        fontFamily: '"Roboto", sans-serif',
        body: {
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '1'
        },
        heading1: {
            fontSize: '6rem',
            lineHeight: '6rem',
            fontWeight: '300'
        },
        heading2: {
            fontSize: '3.75rem',
            lineHeight: '3.75rem',
            fontWeight: '300'
        },
        heading3: {
            fontSize: '3rem',
            lineHeight: '3.125rem',
            fontWeight: '400'
        },
        heading4: {
            fontSize: '2.125rem',
            lineHeight: '2.5rem',
            fontWeight: '400'
        },
        heading5: {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: '400'
        },
        heading6: {
            fontSize: '1.25rem',
            lineHeight: '2rem',
            fontWeight: '400'
        },
        subtitle1: {
            fontSize: '1rem',
            lineHeight: '1.75rem',
            fontWeight: '400'
        },
        subttile2: {
            fontSize: '0.875rem',
            lineHeight: '1.375rem',
            fontWeight: '500'
        },
        paragraph: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: '400'
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: '500'
        },
        caption: {
            fontSize: '0.75rem',
            lineHeight: '1.25rem',
            fontWeight: '400'
        }
    },
    spacing: {
        unit: 8,
        sm: 8,
        md: 16,
        lg: 24
    },
    breakpoint: {
        sm: 600,
        md: 960,
        lg: 1280
    },
    depth: {
        level: [
            '0 1px 2px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.2)',
            '0 2px 4px 0 rgba(0,0,0,0.2), 0 4px 8px 0 rgba(0,0,0,0.2)',
            '0 4px 8px 0 rgba(0,0,0,0.2), 0 8px 16px 0 rgba(0,0,0,0.2)',
            '0 8px 16px 0 rgba(0,0,0,0.2), 0 20px 16px -8px rgba(0,0,0,0.2)',
            '0 16px 24px 0 rgba(0,0,0,0.2), 0 32px 24px -16px rgba(0,0,0,0.2)'
        ],
        zIndex: {
            'appBar': 1100,
            'drawer': 1200,
            'modal': 1300,
            'message': 1400,
            'popover': 1500
        }
    },
    components: {
        common: {
            padding: {
                sm: 12,
                md: 14,
                lg: 16
            },
            height: {
                sm: 28,
                md: 32,
                lg: 36
            },
            borderRadius: {
                sm: 4,
                md: 4,
                lg: 6
            }
        },
        modal: {
            headerHeight: 48,
            footerHeight: 56
        },
        frameSelection: {
            backgroundColor: 'rgba(24, 160, 251, 0.21)',
            borderColor: '#18a0fb'
        },
        timelineItem: {
            backgroundColor: '#262626',
            borderColor: '#333'
        },
        pointer: {
            color: '#d3a82a',
            colorStart: '#98c92d',
            colorEnd: '#fc4242',
            headerSize: 8,
            fadeHover: 0.4
        },
        slider: {
            width: 160,
            height: 4,
            trackBackgroundColor: 'rgba(255, 255, 255, 0.05)',
            thumbBackgroundColor: '#fff',
            thumbSize: 16
        },
        tooltip: {
            backgroundColor: '#000',
            borderColor: '#373737'
        },
        input: {
            placeholderColor: '#666'
        },
        scrollBar: {
            width: 10,
            trackBackgroundColor: '#212121',
            thumbBackgroundColor: '#3f3f3f'
        },
        card: {
            coverBackgroundColor: '#363636'
        },
        tabs: {
            headerFontSize: '0.75rem'
        }
    },
    transitions: {
        easeInSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
        easeOutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
        easeInOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
        easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        easeInQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
        easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
        easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
        easeInExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
        easeInOutExpo: 'cubic-bezier(1, 0, 0, 1)',
        easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
        easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        easeInOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
};
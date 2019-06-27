import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import combineClassNames from '../../utils/combineClassNames';

const rowStyles = (theme: Theme): any => {
    const spacing = theme.spacing;
    return {
        position: 'relative',
        display: 'block',
        boxSizing: 'border-box',
        '&:after': {
            content: '""',
            clear: 'both',
            visibility: 'hidden'
        },
        '&.flex': {
            display: 'flex',
            '&.left': {
                justifyContent: 'flex-start'
            },
            '&.center': {
                justifyContent: 'center'
            },
            '&.right': {
                justifyContent: 'flex-end'
            },
            '&.middle': {
                alignItems: 'center'
            },
            '&.top': {
                alignItems: 'flex-start'
            },
            '&.bottom': {
                alignItems: 'flex-end'
            }
        },
        '&:not(.flex)': {
            '&:before': {
                content: '""',
                height: '100%',
                display: 'inline-block'
            },
            '&.middle': {
                '&>*, &:before': {
                    verticalAlign: 'middle'
                }
            },
            '&.top': {
                '&>*, &:before': {
                    verticalAlign: 'top'
                }
            },
            '&.bottom': {
                '&>*, &:before': {
                    verticalAlign: 'bottom'
                }
            },
            '&.left': {
                textAlign: 'left'
            },
            '&.center': {
                textAlign: 'center'
            },
            '&.right': {
                textAlign: 'right'
            }
        },
        '&.gutter-sm': {
            '&>*': {
                padding: `${spacing.sm * 0.5}px`
            }
        },
        '&.gutter-md': {
            '&>*': {
                padding: `${spacing.md * 0.5}px`
            }
        },
        '&.gutter-lg': {
            '&>*': {
                padding: `${spacing.lg * 0.5}px`
            }
        }
    };
};

export interface RowProps extends Omit<React.HTMLAttributes<{}>, 'css'>{
    flex?: boolean;
    verticalAlign?: 'top' | 'middle' | 'bottom';
    horizontalAlign?: 'left' | 'center' | 'right';
    gutter?: ComponentSize;
}

export default ({ flex, verticalAlign, horizontalAlign, gutter, children, className, ...others }: React.PropsWithChildren<RowProps>) => {
    return (
        <div css={rowStyles} className={combineClassNames(
            verticalAlign || 'middle',
            horizontalAlign || 'left',
            gutter ? `gutter-${gutter}` : '',
            flex ? 'flex' : '',
            className
        )} {...others}>
            {children}
        </div>
    );
};
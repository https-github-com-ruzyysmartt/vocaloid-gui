import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { fade } from '../utils/color';
import combineClassNames from '../../utils/combineClassNames';

const pointerStyles = (theme: Theme): any => {
    const pointer = theme.components.pointer;
    const bg = pointer.color;
    const bgStart = pointer.colorStart;
    const bgEnd = pointer.colorEnd;
    return {
        position: 'absolute',
        bottom: 0,
        width: '1px',
        top: Math.SQRT2 * pointer.headerSize,
        left: 0,
        backgroundColor: bg,
        '&:hover, &:active': {
            backgroundColor: fade(bg, pointer.fadeHover)
        },
        '&:after': {
            backgroundColor: 'inherit',
            content: '""',
            position: 'absolute',
            left: `-${pointer.headerSize}px`,
            top: 0,
            width: `${pointer.headerSize}px`,
            height: `${pointer.headerSize}px`,
            transform: 'rotate(45deg)'
        },
        '&.pointer-start': {
            backgroundColor: bgStart,
            '&:hover, &:active': {
                backgroundColor: fade(bgStart, pointer.fadeHover)
            }
        },
        '&.pointer-end': {
            backgroundColor: bgEnd,
            '&:hover, &:active': {
                backgroundColor: fade(bgEnd, pointer.fadeHover)
            }
        }
    };
};

export interface PointerProps extends Omit<React.HTMLAttributes<{}>, 'css'>{
    start?: boolean;
    end?: boolean;
}

export default ({ start, end, className, ...others }: PointerProps) => {
    return (
        <div css={pointerStyles} className={
            combineClassNames(
                start ? 'pointer-start' : '',
                end ? 'pointer-end' : '',
                className
            )
        } {...others}></div>
    );
};
import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import combineClassNames from '../../utils/combineClassNames';

const dividerStyles = (theme: Theme) => {
    return {
        backgroundColor: theme.palette.border.divider,
        '&:not(.divider-vertical)': {
            width: '100%',
            height: '1px',
            margin: `${theme.spacing.md}px 0`
        },
        '&.divider-vertical': {
            width: '1px',
            height: '100%',
            margin: `0 ${theme.spacing.md}px`
        }
    };
};

export interface DividerProps extends BaseComponentProps{
    vertical?: boolean;
}

export default ({ vertical, className, ...others }: DividerProps) => {
    return (
        <div className={combineClassNames(vertical ? 'divider-vertical' : '', className)} css={dividerStyles} {...others}></div>
    );
};
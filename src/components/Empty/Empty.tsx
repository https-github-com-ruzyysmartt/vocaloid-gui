import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import { FiAlertCircle } from 'react-icons/fi';
import verticalAlign from '../mixins/verticalAlign';

const emptyStyles = (theme: Theme): any => {
    return {
        padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
        textAlign: 'center',
        ...verticalAlign()
    };
};

export interface EmptyProps{
    desc?: string;
}

export default ({ children, desc, ...others }: React.PropsWithChildren<EmptyProps>) => {
    return (
        <p css={emptyStyles} {...others}>
            {children || (
                <React.Fragment>
                    <FiAlertCircle size={20} /> <span>{desc || 'No data found...'}</span>
                </React.Fragment>
            )}
        </p>
    );
};
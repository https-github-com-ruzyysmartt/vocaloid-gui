import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

const headerStyles = (theme: Theme) => {
    return {
        width: '100%',
        display: 'flex',
        borderBottom: `1px solid ${theme.palette.border.border}`
    };
};

export default ({ children, ...others }: React.PropsWithChildren<React.HTMLAttributes<{}>>) => {
    return (
        <div css={headerStyles} {...others}>
            {children}
        </div>
    );
};
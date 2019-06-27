import React, {useRef} from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import Popover from '../Popover';
import { PopoverProps } from '../Popover/Popover';

const tooltipStyles = (theme: Theme): any => {
    const p = theme.components.common.padding.sm;
    const tooltipStyle = theme.components.tooltip;
    return {
        padding: `${p * 0.5}px ${p}px`,
        borderRadius: `${theme.components.common.borderRadius.md}px`,
        backgroundColor: tooltipStyle.backgroundColor,
        border: `1px solid ${tooltipStyle.borderColor}`
    };
};

export interface TooltipProps extends PopoverProps{
    title?: string;
    desc?: string;
}

export default ({ title, desc, children, ...others }: React.PropsWithChildren<TooltipProps>) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={wrapperRef}>
            {children}
            <Popover anchorEl={wrapperRef.current} {...others}>
                <div css={tooltipStyles}>
                    <div>{title}</div>
                    {desc ? <div>{desc}</div> : undefined}
                </div>          
            </Popover>
        </div>
    );
};
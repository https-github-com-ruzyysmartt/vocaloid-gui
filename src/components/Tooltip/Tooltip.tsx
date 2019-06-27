import React, { useRef, useState } from 'react';
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
    trigger?: 'hover' | 'click';
}

export default ({ title, desc, trigger, children, ...others }: React.PropsWithChildren<TooltipProps>) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const t = trigger || 'hover';
    const onMouseEnter = t === 'hover' ? () => setShowTooltip(true) : undefined;
    const onMouseLeave = t === 'hover' ? () => setShowTooltip(false) : undefined;
    const onClick = t === 'click' ? () => setShowTooltip(true) : undefined;
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} ref={wrapperRef}>
            {children}
            <Popover visible={showTooltip} onClose={() => setShowTooltip(false)}
                anchorEl={wrapperRef.current} {...others}>
                <div css={tooltipStyles}>
                    <div>{title}</div>
                    {desc ? <div>{desc}</div> : undefined}
                </div>
            </Popover>
        </div>
    );
};
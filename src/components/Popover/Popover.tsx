import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import useResize from '../../hooks/useResize';
import useClickOutside from '../../hooks/useClickOutside';

const popoverContainerStyles = (theme: Theme): any => {
    const radius = `${theme.components.common.borderRadius['md']}px`;
    return {
        position: 'absolute',
        '.popover': {
            position: 'absolute'
        },
        '.popover-content': {
            borderRadius: radius,
            backgroundColor: theme.palette.background.surface,
            boxShadow: theme.depth.level[2],
            zIndex: theme.depth.zIndex['popover'],
            '&>*:first-of-type': {
                borderTopLeftRadius: radius,
                borderTopRightRadius: radius
            },
            '&>*:last-child': {
                borderBottomLeftRadius: radius,
                borderBottomRightRadius: radius
            }
        }
    };
};

export interface PopoverPosition{
    horizontal: 'left'|'center'|'right';
    vertical: 'top'|'middle'|'bottom';
}

export interface PopoverProps extends BaseComponentProps{
    visible?: boolean;
    anchorEl?: HTMLElement|null;
    anchorPos?: PopoverPosition;
    transformPos?: PopoverPosition;
    transitionClassNames?: string | Dictionary<string>;
    onClose?: (...args: any[]) => void;
}

export default ({
    visible, anchorEl, anchorPos, transformPos,
    onClose, transitionClassNames, children, ...others
}: React.PropsWithChildren<PopoverProps>) => {
    const [show, setShow] = useState(false);
    const [transitionActive, setTransitionActive] = useState(false);
    const [transitionEnded, setTransitionEnded] = useState(false);

    const [ap, setAp] = useState(anchorPos || { horizontal: 'left', vertical: 'top' });
    const [tp, setTp] = useState(transformPos || { horizontal: 'left', vertical: 'top' });

    useEffect(() => {
        if (visible) {
            setTransitionEnded(false);
            setShow(true);
        }
        if (!visible && transitionEnded) {
            setShow(false);
        }
        setTransitionActive(visible || false);
    }, [visible, transitionEnded]);

    const onClickOutSide = (e: MouseEvent) => {
        if (anchorEl && (anchorEl.contains(e.target as HTMLElement) || anchorEl === e.target)) return;
        onClose && onClose();
    };

    const wrapper = useRef<HTMLDivElement>(null);
    useClickOutside(wrapper.current, onClickOutSide, 'mousedown');
    const [pos, setPos] = useState({ left: 0, top: 0 });
    const pageSize = useResize(null);
    useEffect(() => {
        if (anchorEl && wrapper.current && visible) {
            const bounds = anchorEl.getBoundingClientRect();
            const wBounds = wrapper.current.getBoundingClientRect();
            let newPos = { left: 0, top: 0 };
            if (ap.horizontal === 'left' || bounds.right + wBounds.width > pageSize.width) {
                newPos.left = bounds.left;
            } else if (ap.horizontal === 'right' || bounds.left - wBounds.width < 0) {
                newPos.left = -(pageSize.width - (bounds.left + bounds.width));
            } else {
                newPos.left = bounds.left + bounds.width * 0.5;
            }

            if (ap.vertical === 'top' || bounds.bottom + wBounds.height > pageSize.height) {
                newPos.top = bounds.top;
            } else if (ap.vertical === 'bottom' || bounds.top - wBounds.height < 0) {
                newPos.top = -(pageSize.height - (bounds.top + bounds.height));
            } else {
                newPos.top = bounds.top + bounds.height * 0.5;
            }
            setPos(newPos);
        }
    }, [wrapper.current, visible, pageSize.width, pageSize.height]);

    let popoverContainerStyle: React.CSSProperties = {
        display: show ? 'block' : 'none',
        transform: ''
    };
    let popoverStyle: React.CSSProperties = {
        transform: ''
    };
    let popoverContentStyle: React.CSSProperties = {
        transformOrigin: `${tp.horizontal} ${tp.vertical}`
    };

    if (tp.horizontal === 'left') {
        popoverStyle.left = '0';
    } else if (tp.horizontal === 'center') {
        popoverStyle.left = '50%';
        popoverStyle.transform += ' translateX(-50%)';
    } else {
        popoverStyle.right = '0';
    }

    if (tp.vertical === 'top') {
        popoverStyle.top = '0';
    } else if (tp.vertical === 'middle') {
        popoverStyle.top = '50%';
        popoverStyle.transform += ' translateY(-50%)';
    } else {
        popoverStyle.bottom = '0';
    }
    if (pos.left >= 0) { popoverContainerStyle.left = `${pos.left}px` }
    else { popoverContainerStyle.right = `${Math.abs(pos.left)}px` }
    if (pos.top >= 0) { popoverContainerStyle.top = `${pos.top}px` }
    else { popoverContainerStyle.bottom = `${Math.abs(pos.top)}px` }

    return createPortal(<div ref={wrapper} css={popoverContainerStyles} style={popoverContainerStyle}>
        <div className="popover" style={popoverStyle} {...others}>
            <CSSTransition timeout={300} unmountOnExit classNames={transitionClassNames || 'scale'} in={transitionActive}
                onExited={() => setTransitionEnded(true)}>
                <div className="popover-content" style={popoverContentStyle}>
                    {children}
                </div>
            </CSSTransition>
        </div>
    </div>, document.body);
};
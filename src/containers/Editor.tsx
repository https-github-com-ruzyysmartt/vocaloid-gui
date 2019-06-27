import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import PlayerControlBar from './PlayerControlBar';
import Header from './Header';

const PLAYER_CONTROL_BAR_HEIGHT = 64;
const HEADER_HEIGHT = 36;

const editorStyles = (theme: Theme): any => {
    return {
        padding: `${HEADER_HEIGHT}px 0 ${PLAYER_CONTROL_BAR_HEIGHT}px 0`,
        boxSizing: 'border-box',
        '.player-controlbar': {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: `${PLAYER_CONTROL_BAR_HEIGHT}px`
        },
        '.header': {
            height: `${HEADER_HEIGHT}px`
        }
    };
};

export default () => {
    return (
        <div css={editorStyles}>
            <Header className="header" />
            <PlayerControlBar className="player-controlbar" />
        </div>
    );
};
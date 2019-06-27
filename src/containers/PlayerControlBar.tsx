import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FiRepeat } from 'react-icons/fi';
import verticalAlign from '../components/mixins/verticalAlign';
import Volume from '../components/Volume';
import Button, { PlayButton } from '../components/Button';

const playerControlBarStyles = (theme: Theme): any => {
    return {
        display: 'flex',
        '.left, .center, .right': {
            flexShrink: 0,
            ...verticalAlign()
        },
        '.left': {
            textAlign: 'left'
        },
        '.center': {
            textAlign: 'center',
            flex: 1
        },
        '.right': {
            textAlign: 'right'
        }
    };
};



export default () => {
    return (
        <div css={playerControlBarStyles}>
            <div className="left">
                <Volume />
            </div>
            <div className="center">
                <PlayButton flat iconSize={24} />
            </div>
            <div className="right">
                <Button flat>
                    <FiRepeat />
                </Button>
            </div>
        </div>
    );
};
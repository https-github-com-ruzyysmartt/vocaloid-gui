import React from 'react';
import {
    MdPlayArrow,
    MdPause
} from 'react-icons/md';
import Button, { ButtonProps } from './Button';

export interface PlayButtonProps extends Omit<ButtonProps, 'onChange'>{
    iconSize?: number;
    playing?: boolean;
    onChange?: (v: boolean) => void;
}

export default ({ playing, iconSize, onChange, onClick, ...others }: PlayButtonProps) => {
    const onBtnClick = (e: React.MouseEvent) => {
        onChange && onChange(!playing);
        onClick && onClick(e);
    };
    return (
        <Button flat onClick={onBtnClick} {...others}>
            {
                playing ? <MdPause size={iconSize} /> : <MdPlayArrow size={iconSize} />
            }
        </Button>
    );
};
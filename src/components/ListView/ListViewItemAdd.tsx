import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { withTheme } from 'emotion-theming';
import { ClassNames } from '@emotion/core';
import Card, { CardProps } from '../card/Card';
import { CardCover, CardTitle } from '../card';
import combineClassNames from '../../utils/combineClassNames';
import verticalAlign from '../mixins/verticalAlign';

export interface ListViewItemAdd extends CardProps{
    title?: string;
}

export default withTheme(({ title, theme, className, ...others }: ListViewItemAdd & {theme: Theme}) => {
    return (
        <ClassNames>
            {
                ({ css, cx }) => (
                    <Card className={
                        combineClassNames(
                            css({
                                '.item-add-cover': {
                                    background: 'transparent',
                                    textAlign: 'center',
                                    border: `1px dashed ${theme.palette.border.border}`
                                },
                                '.item-add-icon': {
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: theme.palette.border.border
                                },
                                '&:hover': {
                                    '.item-add-cover': {
                                        borderColor: theme.palette.primary.color
                                    },
                                    '.item-add-icon': {
                                        color: theme.palette.primary.color
                                    }
                                }
                            }),
                            className
                        )
                    } {...others}>
                        <CardCover className="item-add-cover">
                            <FiPlus className="item-add-icon" />
                        </CardCover>
                        <CardTitle title={title || 'New'} />
                    </Card>
                )
            }
        </ClassNames>
    );
});
import React from 'react';
import { Card, CardCover, CardTitle } from '../card';
import { CardProps } from '../card/Card';

export interface GridItemProps extends CardProps{
    title?: string;
    thumb?: string;
    loading?: boolean;
}

export default ({ thumb, loading, title, ...others }: GridItemProps) => {
    return (
        <Card {...others}>
            <CardCover src={thumb} loading={loading} />
            <CardTitle nowrap title={title} />
        </Card>
    );
};
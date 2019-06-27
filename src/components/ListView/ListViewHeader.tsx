import React from 'react';
import { Row, Col } from '../Grid';
import { Input } from '../Input';
import { RowProps } from '../Grid/Row';

export interface ListViewHeaderProps extends RowProps{
    title?: string;
    searchText?: string;
    onSearch?: (v: string) => void;
}

export default ({ title, searchText, onSearch, ...others }: ListViewHeaderProps) => {
    return (
        <Row verticalAlign="middle" {...others}>
            <Col span={4}>
                <div style={{ fontWeight: 'bold' }}>{title}</div>
            </Col>
            <Col horizontalAlign="right" span={8}>
                <Input placeholder="Filter..." value={searchText} onChange={onSearch} width={120} size="sm" />
            </Col>
        </Row>
    );
};
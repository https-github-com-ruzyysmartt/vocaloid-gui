import React from 'react';
import { Row, Col } from '../Grid';
import Empty from '../Empty';

export interface ListViewItemProps{
    title: string;
    id: string;
}

export interface ListViewProps<T extends ListViewItemProps> extends React.PropsWithChildren<BaseComponentProps>{
    gutter?: ComponentSize;
    span?: number | ResponsiveProperty<number>;
    items: T[];
    empty?: React.ReactNode|null;
    renderItem: (item: T) => React.ReactNode;
}

function ListView<T extends ListViewItemProps>({
    gutter,
    span,
    items,
    empty,
    renderItem,
    children,
    ...others
}: ListViewProps<T>) {
    const g = gutter || undefined;
    const s = span || 12;
    return (
        <Row gutter={g} {...others}>
            {
                items && items.length > 0 ? (
                    items.map((item) => (
                        <Col key={item.id} span={s}>
                            {
                                renderItem(item)
                            }
                        </Col>
                    ))
                ) : (empty === undefined ? <Empty /> : empty)
            }
            {
                children
            }
        </Row>
    );
}

export default ListView;
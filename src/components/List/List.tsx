import React from 'react';

export interface ListProps extends React.HTMLAttributes<{}>{

}

export default React.forwardRef(({ children, ...others }: React.PropsWithChildren<ListProps>, ref: React.Ref<any>) => {
    return (
        <ul ref={ref} {...others}>
            {
                children
            }
        </ul>
    );
});
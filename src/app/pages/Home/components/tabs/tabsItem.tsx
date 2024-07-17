import React from 'react';
import { TabsProps } from 'antd';
import Tabs1 from './tab1';


const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Khuyến mãi hot',
        children: <Tabs1 />,
    },
    {
        key: '2',
        label: 'Điện thoại bán chạy',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Laptop nổi bật',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '4',
        label: 'Đồng hồ thông minh',
        children: 'Content of Tab Pane 4',
    },
    {
        key: '5',
        label: 'Tai nghe',
        children: 'Content of Tab Pane 5',
    },
];

export default items;

import React from 'react';
import { Menu as AntMenu, } from 'antd';
import {
    DesktopOutlined,
    TabletOutlined,
    MobileOutlined
} from '@ant-design/icons';
const { SubMenu } = AntMenu;

const Menu: React.FC = () => {
    return (
        <AntMenu
            mode="vertical"
            style={{ fontSize: 14, borderRadius: 10, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', height: 310 }}
        >
            <SubMenu key="iphone" icon={<MobileOutlined />} title="Iphone">
                <AntMenu.Item icon={<MobileOutlined />} key="iphone1">Iphone 13</AntMenu.Item>
                <AntMenu.Item icon={<MobileOutlined />} key="iphone2">Iphone 14</AntMenu.Item>
                <AntMenu.Item icon={<MobileOutlined />} key="iphone3">Iphone 15</AntMenu.Item>
            </SubMenu>
            <SubMenu key="ipad" icon={<TabletOutlined />} title="Ipad">
                <AntMenu.Item icon={<TabletOutlined />} key="ipad1">Ipad 13</AntMenu.Item>
                <AntMenu.Item icon={<TabletOutlined />} key="ipad2">Ipad 14</AntMenu.Item>
                <AntMenu.Item icon={<TabletOutlined />} key="ipad3">Ipad 15</AntMenu.Item>
            </SubMenu>
            <SubMenu key="mac" icon={<DesktopOutlined />} title="Mac">
                <AntMenu.Item icon={<DesktopOutlined />} key="mac1">MacBook pro</AntMenu.Item>
                <AntMenu.Item icon={<DesktopOutlined />} key="mac2">MacBook pro</AntMenu.Item>
                <AntMenu.Item icon={<DesktopOutlined />} key="mac3">MacBook pro</AntMenu.Item>
            </SubMenu>
            <SubMenu key="airPods" icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-220.svg" alt="AirPods" style={{ width: 16, height: 16 }} />} title="AirPods">
                <AntMenu.Item icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-220.svg" alt="AirPods" style={{ width: 16, height: 16 }} />} key="airPods1">AirPods</AntMenu.Item>
                <AntMenu.Item icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-220.svg" alt="AirPods" style={{ width: 16, height: 16 }} />} key="airPods2">AirPods</AntMenu.Item>
                <AntMenu.Item icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-220.svg" alt="AirPods" style={{ width: 16, height: 16 }} />} key="airPods3">AirPods</AntMenu.Item>
            </SubMenu>
            <SubMenu key="watch" icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg" alt="watch" style={{ width: 16, height: 16 }} />} title="Apple Watch">
                <AntMenu.Item icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg" alt="watch" style={{ width: 16, height: 16 }} />} key="watch1">Apple Watch</AntMenu.Item>
                <AntMenu.Item icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg" alt="watch" style={{ width: 16, height: 16 }} />} key="watch2">Apple Watch</AntMenu.Item>
                <AntMenu.Item icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg" alt="watch" style={{ width: 16, height: 16 }} />} key="watch3">Apple Watch</AntMenu.Item>
            </SubMenu>
            <SubMenu key="accessory" icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg" alt="accessory" style={{ width: 16, height: 16 }} />} title="Phụ kiện">
                <AntMenu.Item icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg" alt="accessory" style={{ width: 16, height: 16 }} />} key="accessory1">Phụ kiện</AntMenu.Item>
                <AntMenu.Item icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg" alt="accessory" style={{ width: 16, height: 16 }} />} key="accessory2">Phụ kiện</AntMenu.Item>
                <AntMenu.Item icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg" alt="accessory" style={{ width: 16, height: 16 }} />} key="accessory3">Phụ kiện</AntMenu.Item>
            </SubMenu>
            <SubMenu key="tv&home" icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-1124.svg" alt="tv&home" style={{ width: 16, height: 16 }} />} title="TV & Nhà">
                <AntMenu.Item icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-1124.svg" alt="tv&home" style={{ width: 16, height: 16 }} />} key="tv&home1">TV & Nhà</AntMenu.Item>
                <AntMenu.Item icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-1124.svg" alt="tv&home" style={{ width: 16, height: 16 }} />} key="tv&home2">TV & Nhà</AntMenu.Item>
                <AntMenu.Item icon={<img src="https://cellphones.com.vn/media/icons/menu/icon-cps-1124.svg" alt="tv&home" style={{ width: 16, height: 16 }} />} key="tv&home3">TV & Nhà</AntMenu.Item>
            </SubMenu>
        </AntMenu>
    );
}

export default Menu;

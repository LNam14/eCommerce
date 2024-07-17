import React, { useState, useEffect } from 'react';
import { Layout, Image, Button, Input, Avatar, BackTop, Popover } from 'antd';
import {
    UnorderedListOutlined,
    SearchOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    CloseOutlined,
    ArrowUpOutlined,
} from '@ant-design/icons';
import Menu from '../Menu/menu';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
    const [search, setSearch] = useState("");
    const [scrollPos, setScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(currentScrollPos < scrollPos || currentScrollPos < 10);
            setScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPos]);

    return (
        <AntHeader
            style={{
                position: 'fixed',
                zIndex: 1,
                backgroundColor: 'white',
                height: 75,
                borderBottom: '1px solid #f0f0f0',
                top: visible ? 0 : -75,
                transition: 'top 0.6s',
                padding: 0,
                left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto'
            }}
        >
            <Layout style={{ width: 1135, height: 75, backgroundColor: "white", marginLeft: 'auto', marginRight: 'auto' }}>
                <Layout style={{ width: "100%", backgroundColor: "white", }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 75 }}>
                        <Image
                            width={100}
                            src={"/images/logo/logo.png"}
                            preview={false}
                        />
                        <Popover
                            content={<Menu />}
                            trigger="hover"
                        >
                            <Button
                                type="primary"
                                style={{
                                    fontFamily: "Dancing Script",
                                    height: 35,
                                    fontSize: 16,
                                    borderRadius: 20,
                                    backgroundColor: "#d63633"
                                }}
                                icon={<UnorderedListOutlined />}
                            >
                                Danh mục
                            </Button>
                        </Popover>
                        <Input
                            size='large'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Bạn cần tìm gì ?"
                            suffix={search === "" ? <SearchOutlined /> : <CloseOutlined />}
                            style={{ width: 520, borderRadius: 20 }}
                        />
                        <Avatar size={40} icon={<UserOutlined />} />
                        <Button
                            type="primary"
                            style={{
                                fontFamily: "Dancing Script",
                                height: 35,
                                fontSize: 16,
                                borderRadius: 20,
                                backgroundColor: "#d63633"
                            }}
                            icon={<ShoppingCartOutlined />}
                        >
                            Giỏ hàng
                        </Button>
                    </div>
                </Layout>
            </Layout>
            <BackTop visibilityHeight={100} style={{ right: 20 }}>
                <Button style={{ backgroundColor: "#fff", color: "#6a6a6a", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', }} type="primary" shape="circle" icon={<ArrowUpOutlined style={{ fontSize: 12 }} />} size="large" />
            </BackTop>
        </AntHeader>
    );
}

export default Header;

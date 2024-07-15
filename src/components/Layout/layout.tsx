import React from 'react';
import { Layout } from 'antd';
import Footer from '../Footer/footer';
import Header from '../Header/header';

const LayoutComponent = ({ children }: { children: any }) => {
    return (
        <Layout>
            <div style={{ marginTop: 75, marginLeft: "auto", marginRight: "auto" }}>
                <Header />
            </div>
            <Layout style={{ marginTop: 5, marginLeft: "auto", marginRight: "auto" }}>
                {children}
            </Layout>
            <Layout style={{ marginLeft: "auto", marginRight: "auto" }}>
                <Footer />
            </Layout>
        </Layout>
    );
}

export default LayoutComponent;

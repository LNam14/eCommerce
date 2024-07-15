
import Menu from "@/components/Menu/menu";
import React from "react";
import { Image, message, Tabs, TabsProps } from 'antd';
import "./home.css"
const HomePage = () => {
    const messageTest = () => {
        message.success("Helo")
    }
    const onChange = (key: string) => {
        console.log(key);
    };
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Khuyến mãi hot',
            children: 'Content of Tab Pane 1',
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
            key: '44',
            label: 'Đồng hồ thông minh',
            children: 'Content of Tab Pane 4',
        },
        {
            key: '5',
            label: 'Tai nghe',
            children: 'Content of Tab Pane 5',
        },
    ];
    return (
        <div style={{ width: 1630, height: 2000, }}>
            <div style={{ display: "flex", justifyContent: "center", }}>
                <div style={{ width: "60%", paddingTop: 10, height: 320, display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "20%" }}>
                        <Menu />
                    </div>
                    <div style={{ width: "59%", display: "flex", flexDirection: "column", borderRadius: 10, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
                        <Image preview={false} style={{ height: 250, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/GALAXY-WATCH-ULTRA-WATCH-7-shome.png" />
                        <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 2 }}>
                            <button className="custom-button" style={{ borderBottomLeftRadius: 10 }} onClick={messageTest}>
                                Iphone 13 <br /> Đặt ngay giá rẻ
                            </button>
                            <button className="custom-button">
                                Iphone 13 <br /> Đặt ngay giá rẻ
                            </button>
                            <button className="custom-button">
                                Iphone 13 <br /> Đặt ngay giá rẻ
                            </button>
                            <button className="custom-button">
                                Iphone 13 <br /> Đặt ngay giá rẻ
                            </button>
                            <button className="custom-button" style={{ borderBottomRightRadius: 10 }}>
                                Iphone 13 <br /> Đặt ngay giá rẻ
                            </button>
                        </div>
                    </div>
                    <div style={{ width: "20%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <Image preview={false} style={{ borderRadius: 10, height: 96 }} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-right-banner-laptop.jpg" />
                        <Image preview={false} style={{ borderRadius: 10, height: 96 }} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-right-banner-laptop.jpg" />
                        <Image preview={false} style={{ borderRadius: 10, height: 96 }} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-right-banner-laptop.jpg" />
                    </div>
                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                <div style={{ width: "60%" }}>
                    <Image preview={false} style={{ borderRadius: 10 }} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-update-19-06%20(1).gif" />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                <div style={{ width: "60%", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ backgroundColor: "white", width: "24%", borderRadius: 10, padding: 15, display: "flex", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', height: 160 }}>
                        <p style={{ fontSize: 16, fontWeight: "bold", color: "black", marginTop: 10, }}>MAC BOOK</p>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                            <div style={{ backgroundColor: "white" }}></div>
                            <Image preview={false} style={{ width: "100%" }} src="https://www.apple.com/v/macbook-air/s/images/overview/routers/trade_in__6u9w2o7115uu_large.jpg" />
                        </div>
                    </div>
                    <div style={{ width: "24%", height: 160, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div style={{ height: 75, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", borderRadius: 10, padding: 10, display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <p style={{ fontSize: 16, fontWeight: "bold", color: "black", }}>Iphone</p>
                            <Image preview={false} style={{ height: 70 }} src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(60)/Tren_20_trieu_cate_thumb_9464481b81.png" />
                        </div>
                        <div style={{ height: 75, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", borderRadius: 10, padding: 10, display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <p style={{ fontSize: 16, fontWeight: "bold", color: "black", }}>Điện thoại</p>
                            <Image preview={false} style={{ height: 70 }} src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(60)/Tren_20_trieu_cate_thumb_9464481b81.png" />
                        </div>
                    </div>
                    <div style={{ width: "24%", height: 160, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div style={{ height: 75, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", borderRadius: 10, padding: 10, display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <p style={{ fontSize: 16, fontWeight: "bold", color: "black", }}>Apple Watch</p>
                            <Image preview={false} style={{ height: 70 }} src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(60)/dong_ho_cate_thumb_fefdd822ba.png" />
                        </div>
                        <div style={{ height: 75, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: "white", borderRadius: 10, padding: 10, display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <p style={{ fontSize: 16, fontWeight: "bold", color: "black", }}>Điện thoại</p>
                            <Image preview={false} style={{ height: 70 }} src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(60)/Tren_20_trieu_cate_thumb_9464481b81.png" />
                        </div>
                    </div>
                    <div style={{ backgroundColor: "white", width: "24%", borderRadius: 10, padding: 15, display: "flex", boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', height: 160 }}>
                        <p style={{ fontSize: 16, fontWeight: "bold", color: "black", marginTop: 10, }}>TV</p>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                            <div style={{ backgroundColor: "white" }}></div>
                            <Image preview={false} style={{ width: "100%" }} src="https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(60)/tivi_cate_thumb_a23c4a577b.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                <div style={{ width: "60%", display: "flex", justifyContent: "space-between" }}>
                    <Tabs
                        tabBarGutter={94}
                        size="large"
                        style={{
                            backgroundColor: 'white',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            fontSize: 16,
                            padding: 20
                        }}
                        tabBarStyle={{
                            color: "black"
                        }}
                        defaultActiveKey="1"
                        items={items.map(item => ({
                            key: item.key,
                            label: item.label,
                            children: item.children,
                        }))}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    )
}
export default HomePage;
import React from 'react';
import { Button, Card, Divider, Flex, Image, Tag } from 'antd';

const { Meta } = Card;

const CardComponents = ({
    image,
    priceInitial,
    price,
    priceDiscount,
    nameProduct,
    color,
    capacity
}: {
    image: string;
    priceInitial: string;
    price: string;
    priceDiscount: string;
    nameProduct: string;
    color: { value: string }[];
    capacity: { value: string }[];
}) => {

    return (
        <Card
            style={{ width: '100%' }}
            cover={<Image style={{ padding: 10 }} alt="example" src={image} />}
        >
            <div>
                <span style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color: "#898590",
                    backgroundColor: "#e5e7eb",
                    width: "auto",
                    padding: 2,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 50,
                }}>Trả góp 0%</span>
            </div>
            <div style={{ marginTop: 5 }}>
                <span style={{ textDecorationLine: "line-through", color: "#6b7280" }}>{priceInitial} đ</span>
                <span style={{ color: "red", fontWeight: "bold", paddingBottom: 50, paddingLeft: 5, fontSize: 12, position: "absolute" }}>-16%</span>
            </div>
            <div style={{ fontSize: 18, fontWeight: "600" }}>
                {price} đ
            </div>
            <div style={{ fontSize: 10, fontWeight: "600", color: "#00851C" }}>
                Giảm {priceDiscount} đ
            </div>
            <div style={{ fontSize: 16, fontWeight: "600", color: "black" }}>
                {nameProduct}
            </div>
            <Flex gap="4px 0" wrap>
                {color.map((item, index) => (
                    <Tag key={index} style={{ borderRadius: 14, lineHeight: 30, height: 14 }} color={item.value} />
                ))}
            </Flex>
            <Flex gap="2px 0" wrap style={{ marginTop: 10 }}>
                {capacity.map((item, index) => (
                    <Button key={index} style={{ width: "30%" }}>{item.value}</Button>
                ))}

            </Flex>
            <Divider orientation="left"></Divider>
            <Flex gap="2px 6px" wrap style={{ marginTop: 10 }}>
                <Image width={35} style={{ border: "1px solid grey", marginLeft: 5, borderRadius: 5 }} src="https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/Logo-1711608161110.jpeg?w=32&q=60" />
                <Image width={35} style={{ border: "1px solid grey", marginLeft: 5, borderRadius: 5 }} src="https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/Logo-1711608161110.jpeg?w=32&q=60" />
                <Image width={35} style={{ border: "1px solid grey", marginLeft: 5, borderRadius: 5 }} src="https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/Logo-1711608161110.jpeg?w=32&q=60" />
                <Image width={35} style={{ border: "1px solid grey", marginLeft: 5, borderRadius: 5 }} src="https://s3-sgn09.fptcloud.com/ict-k8s-promotion-prod/images-promotion/Logo-1711608161110.jpeg?w=32&q=60" />
            </Flex>
            <div style={{ fontSize: 13, color: "#6b7280", marginTop: 10 }}>
                Nhập mã ZLP150 giảm tối đa 150.000 đ qua Zalo Pay
            </div>

        </Card>
    )
}
export default CardComponents;

import { Carousel } from 'antd';
import React from 'react';
import CardComponents from "../cards/card";

const Tabs1 = () => {
    const listItem = [
        {
            image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(60)/2023_10_30_638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg",
            priceInitial: "33.660.000",
            discount: "12%",
            price: "29.330.000",
            priceDiscount: "3.330.000",
            nameProduct: "iPhone 15 Pro Max",
            color: [
                { value: "red" },
                { value: "orange" },
                { value: "green" },
                { value: "blue" }
            ],
            capacity: [
                { value: "256GB" },
                { value: "512GB" },
                { value: "1 TB" }
            ],
        },
        {
            image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(60)/2023_10_30_638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg",
            priceInitial: "33.660.000",
            discount: "12%",
            price: "29.330.000",
            priceDiscount: "3.330.000",
            nameProduct: "iPhone 15 Pro Max",
            color: [
                { value: "red" },
                { value: "orange" },
                { value: "green" },
                { value: "blue" }
            ],
            capacity: [
                { value: "256GB" },
                { value: "512GB" },
                { value: "1 TB" }
            ],
        },
        {
            image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(60)/2023_10_30_638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg",
            priceInitial: "33.660.000",
            discount: "12%",
            price: "29.330.000",
            priceDiscount: "3.330.000",
            nameProduct: "iPhone 15 Pro Max",
            color: [
                { value: "red" },
                { value: "orange" },
                { value: "green" },
                { value: "blue" }
            ],
            capacity: [
                { value: "256GB" },
                { value: "512GB" },
                { value: "1 TB" }
            ],
        },
        {
            image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(60)/2023_10_30_638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg",
            priceInitial: "33.660.000",
            discount: "12%",
            price: "29.330.000",
            priceDiscount: "3.330.000",
            nameProduct: "iPhone 15 Pro Max",
            color: [
                { value: "red" },
                { value: "orange" },
                { value: "green" },
                { value: "blue" }
            ],
            capacity: [
                { value: "256GB" },
                { value: "512GB" },
                { value: "1 TB" }
            ],
        },
        {
            image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(60)/2023_10_30_638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg",
            priceInitial: "33.660.000",
            discount: "12%",
            price: "29.330.000",
            priceDiscount: "3.330.000",
            nameProduct: "iPhone 15 Pro Max",
            color: [
                { value: "red" },
                { value: "orange" },
                { value: "green" },
                { value: "blue" }
            ],
            capacity: [
                { value: "256GB" },
                { value: "512GB" },
                { value: "1 TB" }
            ],
        },
        {
            image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(60)/2023_10_30_638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg",
            priceInitial: "33.660.000",
            discount: "12%",
            price: "29.330.000",
            priceDiscount: "3.330.000",
            nameProduct: "iPhone 15 Pro Max",
            color: [
                { value: "red" },
                { value: "orange" },
                { value: "green" },
                { value: "blue" }
            ],
            capacity: [
                { value: "256GB" },
                { value: "512GB" },
                { value: "1 TB" }
            ],
        },
        {
            image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(60)/2023_10_30_638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg",
            priceInitial: "33.660.000",
            discount: "12%",
            price: "29.330.000",
            priceDiscount: "3.330.000",
            nameProduct: "iPhone 15 Pro Max",
            color: [
                { value: "red" },
                { value: "orange" },
                { value: "green" },
                { value: "blue" }
            ],
            capacity: [
                { value: "256GB" },
                { value: "512GB" },
                { value: "1 TB" }
            ],
        },
        {
            image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(60)/2023_10_30_638342502751589917_ip-15-pro-max-dd-bh-2-nam.jpg",
            priceInitial: "33.660.000",
            discount: "12%",
            price: "29.330.000",
            priceDiscount: "3.330.000",
            nameProduct: "iPhone 15 Pro Max",
            color: [
                { value: "red" },
                { value: "orange" },
                { value: "green" },
                { value: "blue" }
            ],
            capacity: [
                { value: "256GB" },
                { value: "512GB" },
                { value: "1 TB" }
            ],
        },
    ];

    return (
        <Carousel
            arrows
            infinite
            autoplay
            autoplaySpeed={3000}
            slidesToShow={4}
            slidesToScroll={1}
            dots
            style={{ width: 1100 }}
        >
            {listItem.map((item, index) => (
                <div key={index} style={{ flex: '0 0 25%', padding: '1px' }}>
                    <CardComponents
                        image={item.image}
                        priceInitial={item.priceInitial}
                        price={item.price}
                        priceDiscount={item.priceDiscount}
                        nameProduct={item.nameProduct}
                        color={item.color}
                        capacity={item.capacity}
                    />


                </div>
            ))}
        </Carousel>
    );
}

export default Tabs1;

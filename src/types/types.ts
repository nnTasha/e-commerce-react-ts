import { InputNumberProps } from "antd";

export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    rating: {};
};

export type childrenNode = {
    children: React.ReactNode;
}

export type CartItem = {
    id: number;
    quantity: number;
};

export type Item = {
    title: string;
    image: string;
    price: number;
    quantity: number;
}

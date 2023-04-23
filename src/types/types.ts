export type Product = {
    id: number;
    title: string;
    price: string;
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

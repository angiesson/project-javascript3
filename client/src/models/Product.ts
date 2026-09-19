export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    sku: string;
    imageUrl: string;
}

export type NewProduct = Omit<Product, 'id'>;
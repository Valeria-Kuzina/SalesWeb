import { ProductImage } from ".";

export interface Product {
    id: number;
    name: string;
    description: string;
    categoryId: string;
    images: ProductImage[];
}

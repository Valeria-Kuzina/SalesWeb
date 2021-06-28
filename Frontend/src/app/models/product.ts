import { ProductImage } from ".";

export interface Product {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    images: ProductImage[];
}

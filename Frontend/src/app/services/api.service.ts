import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Product } from '../models';

@Injectable()
export class ApiService{

    constructor(private readonly http: HttpClient) {
    }

    getProduct(id: number) {
        return this.http.get<Product>(`/api/products/${id}`);
    }

    getProducts(categoryId?: number) {
        let params = new HttpParams();
        if (categoryId !== undefined)
            params = params.set('categoryId', categoryId.toString());

        return this.http.get<Product[]>('/api/products', { params });
    }

    saveProducts(product: Product) {
        return this.http.post<Product>('/api/products', product);
    }

    getCategories() {
        return this.http.get<Category[]>('/api/products/categories');
    }

    getCategory(id: number) {
        return this.http.get<Category>(`/api/products/categories/${id}`);
    }

    saveCategory(category: Category) {
        return this.http.post<void>('/api/products/categories', category);
    }
}

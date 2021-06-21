import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Product } from '../models';

@Injectable()
export class ApiService{

    constructor(private readonly http: HttpClient) {
    }

    getProduct(id: number) {
        return this.http.get<Product>(`/products/${id}`);
    }

    getProducts() {
        return this.http.get<Product[]>("/products");
    }

    getCategories() {
        return this.http.get<Category[]>("/products/categories");
    }

    saveCategory(category: Category) {
        return this.http.post<void>("/products/categories", category);
    }
}

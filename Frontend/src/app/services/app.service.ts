import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class AppService{

    constructor(private readonly http: HttpClient) {
    }

    getProducts() {
        return this.http.get<Product[]>("/products");
    }
}

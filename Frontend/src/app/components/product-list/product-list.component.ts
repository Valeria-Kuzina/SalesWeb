import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.html',
    styles: [],
    providers: [HttpClient]
})
export class ProductListComponent implements OnInit {
    
    products: Product[] = [];

    constructor(
        private readonly apiService: ApiService
    ) {
    }

    ngOnInit() {
        this.apiService.getProducts().subscribe(x => this.products = x);
    }
}

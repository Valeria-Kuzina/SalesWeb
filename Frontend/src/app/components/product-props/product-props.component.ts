import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models';

@Component({
    selector: 'product-props',
    templateUrl: 'product-props.html',
    styleUrls: ['product-props.css'],
    providers: [HttpClient]
})
export class ProductPropsComponent implements OnInit {

    product: Product = this.createNew();
    categories: Category[] = [];

    constructor(
        private readonly apiService: ApiService,
        private readonly activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.loadCategories();
        this.activatedRoute.params.subscribe(({ id }) => {
            this.load(+id);
        });
    }

    private loadCategories() {
        this.apiService.getCategories().subscribe(x => this.categories = x);
    }

    private load(id: number) {
        if (!id) {
            this.product = this.createNew();
            return;
        }

        this.apiService.getProduct(id)
            .subscribe(x => this.product = x);
    }

    private createNew() {
        return {
            id: 0,
            name: '',
            description: '',
            categoryId: 0,
            images: []
        };
    }

    save() {
        this.apiService.saveProducts(this.product)
            .subscribe(x => this.product = x);
    }
}

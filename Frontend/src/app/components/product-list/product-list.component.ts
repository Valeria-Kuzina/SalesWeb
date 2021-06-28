import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product';
import { Subject } from 'rxjs';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.html',
    styleUrls: ['product-list.css'],
    providers: [HttpClient]
})
export class ProductListComponent implements OnInit, OnChanges {

    products: Product[] = [];

    @Input()
    categoryId: number = 0;

    categoryIdChange$ = new Subject<number>();

    constructor(
        private readonly apiService: ApiService
    ) {
        this.categoryIdChange$.pipe(
        )
            .subscribe(categoryId => {
                this.loadCategory(categoryId);
            });
    }

    private loadCategory(categoryId: number) {
        this.apiService.getProducts(categoryId).subscribe(x => {
            this.products = x;
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.categoryId)
            this.categoryIdChange$.next(<number>(changes.categoryId.currentValue));
    }

    ngOnInit() {
        this.apiService.getProducts().subscribe(x => this.products = x);
    }
}

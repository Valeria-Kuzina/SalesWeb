import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { forkJoin } from 'rxjs';
import { Order, Product } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'order',
    templateUrl: 'order.html',
    styleUrls: ['order.css'],
    providers: [HttpClient]
})
export class OrderComponent {

    order: Order | undefined;
    products = new Map<number, Product>();

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly api: ApiService) {

        this.activatedRoute.params.subscribe(({ id }) => {
            forkJoin(
                this.api.getOrder(+id),
                this.api.getProducts()
            ).subscribe(([order, products]) => {
                this.order = order;
                for (const product of products)
                    this.products.set(product.id, product);
            });
        });
    }
}

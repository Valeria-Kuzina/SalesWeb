import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../services/app.service';
import { Product } from '../../models/product';

@Component({
    selector: 'app-root',
    templateUrl: 'app.html',
    styles: [],
    providers: [HttpClient]
})
export class AppComponent implements OnInit {

    title = 'Electronix Store';
    products: Product[] = [];

    constructor(
        private readonly appService: AppService
    ) {
    }

    ngOnInit() {
        this.appService.getProducts().subscribe(x => this.products = x);
    }
}

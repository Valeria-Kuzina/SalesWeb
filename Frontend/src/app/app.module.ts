import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CategoryCreationModalComponent } from './components/category-creation-modal/category-creation-modal.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductPropsComponent } from './components/product-props/product-props.component';
import { ApiService } from './services/api.service';
import { OrdersService } from './services/orders.service';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CatalogueComponent,
        CategoryCreationModalComponent,
        ProductListComponent,
        ProductTableComponent,
        ProductPropsComponent,
        OrderListComponent,
        CartComponent,
        OrderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModalModule,
        NgbCarouselModule,
        FormsModule,
    ],
    providers: [ApiService, OrdersService],
    bootstrap: [AppComponent]
})
export class AppModule { }

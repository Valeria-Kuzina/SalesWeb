import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ProductPropsComponent } from './components/product-props/product-props.component';
import { ProductTableComponent } from './components/product-table/product-table.component';

const routes: Routes = [
    { path: 'catalogue', component: CatalogueComponent },
    { path: 'products', component: ProductTableComponent },
    { path: 'products/:id', component: ProductPropsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'catalogue' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

const routes: Routes = [
    { path: 'catalogue', component: CatalogueComponent },
    { path: '', pathMatch: 'full', redirectTo: 'catalogue' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

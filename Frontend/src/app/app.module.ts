import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CatalogueCreationModalComponent } from './components/catalogue-creation-modal/catalogue-creation-modal.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HeaderComponent } from './components/header/header.component';
import { ApiService } from './services/api.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CatalogueComponent,
        CatalogueCreationModalComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModalModule,
        FormsModule,
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }

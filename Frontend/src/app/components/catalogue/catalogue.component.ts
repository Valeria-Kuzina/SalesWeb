import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { Category } from '../../models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CatalogueCreationModalComponent } from '../catalogue-creation-modal/catalogue-creation-modal.component';

@Component({
    selector: 'catalogue',
    templateUrl: 'catalogue.html',
    styleUrls: ['catalogue.css'],
    providers: [HttpClient]
})
export class CatalogueComponent implements OnInit {

    categories: Category[] = [];

    constructor(
        private readonly apiService: ApiService,
        private readonly modalService: NgbModal,
        private readonly elRef: ElementRef,
    ) {
    }

    ngOnInit() {
        this.load();
    }

    private load() {
        this.apiService.getCategories().subscribe(x => this.categories = x);
    }

    openNewCategoryModal() {
        this.modalService.open(CatalogueCreationModalComponent, {
            animation: true,
            container: this.elRef.nativeElement
        }).result.then(() => this.load()).catch(() => { });
    }
}

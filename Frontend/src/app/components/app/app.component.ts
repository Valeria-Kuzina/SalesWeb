import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../services/app.service';
import { Sample } from '../../models/sample';

@Component({
    selector: 'app-root',
    templateUrl: 'app.html',
    styles: [],
    providers: [HttpClient]
})
export class AppComponent implements OnInit {

    title = 'Electronix Store';
    samples: Sample[] = [];

    constructor(
        private readonly appService: AppService
    ) {
    }

    ngOnInit() {
        this.appService.get().subscribe(x => this.samples = x);
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sample } from '../models/sample';

@Injectable()
export class AppService{

    constructor(private readonly http: HttpClient) {
    }

    get() {
        return this.http.get<Sample[]>("/sample");
    }
}

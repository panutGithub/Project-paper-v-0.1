import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User, OderList } from '@app/_models';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PaperService {
    private orderSubject: BehaviorSubject<User | null>;
    public order: Observable<User | null>;

    constructor(private http: HttpClient, private router: Router,) {

        this.orderSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('order')!));
        this.order = this.orderSubject.asObservable();

    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
        // return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
        // return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    getOrderlist() {
        console.log(this.http.get<OderList>(`${environment.apiUrl}/orderlist`)+" ")
        return this.http.get<OderList>(`${environment.apiUrl}/orderlist`);
    }


    public get orderValue() {
        return this.orderSubject.value;
    }
}

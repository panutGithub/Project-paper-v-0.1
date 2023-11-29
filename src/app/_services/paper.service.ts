import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Paper } from '@app/_models/paper';

@Injectable({ providedIn: 'root' })
export class PaperService {
    constructor(private http: HttpClient) { }

    getDataForm(){
        
        // return this.http.get<Paper[]>(`${environment.apiUrl}/users`);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
        // return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
        // return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }
}
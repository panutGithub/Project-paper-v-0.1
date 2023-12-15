import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User, Address,Station,Person,Result } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    private addressSubject: BehaviorSubject<Address | null>;
    public address: Observable<Address|null>;

    private stationSubject: BehaviorSubject<Station | null>;
    public station: Observable<Station | null>;
    
    private personSubject: BehaviorSubject<Person | null>;
    public person: Observable<Person | null>;

    private resultSubject: BehaviorSubject<Result | null>;
    public result: Observable<Result | null>;

    constructor(private router: Router,private http: HttpClient) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();

        this.addressSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('order')!));
        this.address = this.addressSubject.asObservable();
        
        this.stationSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('order')!));
        this.station = this.stationSubject.asObservable();

        this.personSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('order')!));
        this.person = this.personSubject.asObservable();
        
        this.resultSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('order')!));
        this.result = this.resultSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                console.log(user)
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}
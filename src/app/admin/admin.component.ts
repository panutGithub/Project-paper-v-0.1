import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { AuthenticationService, UserService } from '@app/_services';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    loading = false;
    users: any

    constructor(private userService: UserService,private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });

        this.authenticationService.user.subscribe(x => this.users = x);
    }

    get isUser() {
        return this.authenticationService.user.subscribe(x => this.users = x);
    }


}
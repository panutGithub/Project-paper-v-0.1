import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { HttpClient } from '@angular/common/http';

@Component({ templateUrl: 'index.html' })
export class AdminComponent implements OnInit {
    loading = false;
    users: User[] = [];

    constructor(private userService: UserService, private http: HttpClient) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }

    listtable: any = { idpaper_form: '', paper_form_No: '', paper_form_type: '', paper_form_idp_station: '', paper_form_fullname: '', paper_form_date: '', paper_form_idaddress: '', paper_form_idresult_receive: '', paper_form_status: '', paper_form_outnumber: '' }
    listPaper: any
    address: any = []
    station: any = []
    result: any
    errorMessage: any = []

    setTable() {
        for (let i = 0; i < this.listPaper.length; i++) {
            for (let i = 0; i < this.address.length; i++) {
                if (this.listPaper.paper_form_idaddress == this.address.idaddress) {
                    this.listPaper[i].paper_form_idaddress = this.address.address
                    console.log(this.listPaper[i])
                }
            }
        }

    }

}
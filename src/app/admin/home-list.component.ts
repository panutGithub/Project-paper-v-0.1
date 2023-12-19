import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { HttpClient } from '@angular/common/http';

import { PaperService } from '@app/_services';

@Component({ templateUrl: 'index.html' })
export class HomelistComponent implements OnInit {
    loading = false;
    users: any
    address:any
    station:any
    person:any
    result:any
    
    constructor(private userService: UserService, private http: HttpClient, private authenticationService: AuthenticationService,private paperService :PaperService) {
        // User, Address,Station,Person,Result
    }

    ngOnInit() {
        this.loading = true;
        // this.userService.getAll().pipe(first()).subscribe(users => {
        //     this.loading = false;
        //     this.users = users;
        // });
        this.authenticationService.address.subscribe(x => this.address = x);
        this.authenticationService.station.subscribe(x => this.station = x);
        this.authenticationService.person.subscribe(x => this.person = x);
        this.authenticationService.result.subscribe(x => this.result = x);
        
        console.table(this.paperService.getOrderlist)
    }

    get isUser() {
        return this.authenticationService.user.subscribe(x => this.users = x);
    }


    listtable: any = { idpaper_form: '', paper_form_No: '', paper_form_type: '', paper_form_idp_station: '', paper_form_fullname: '', paper_form_date: '', paper_form_idaddress: '', paper_form_idresult_receive: '', paper_form_status: '', paper_form_outnumber: '' }
    listPaper: any
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
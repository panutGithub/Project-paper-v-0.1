import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Paper, User } from '@app/_models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-paper',
  templateUrl: './form-paper.component.html',
  styleUrls: ['./form-paper.component.less']
})
export class FormPaperComponent implements OnInit {
  title = "Form"
  btnStation: any
  showSt = true //หน่วยงานต ้นเรื่อง
  showSt1 = true //หน่วยงานตอบกลับ
  listPerson: any
  listAddress: any
  listnumP: any;
  elementArray: number[] = [];
  countNum: number;


  constructor(private fb: FormBuilder) {
    this.elementArray.push();
  }
  regisFrom = new FormGroup({
    email: new FormControl(' ', { nonNullable: true }),
    password: new FormControl(' ', { nonNullable: true }),
    stationSubmission : new FormControl(' '),//หน่วยงานส่งเรื่อง
    numberSubmission : new FormControl(' '),//เลขส่งเรื่อง
    dateSubmission : new FormControl(' '),//วัน/เดือน/ปีที่ส่งเรื่อง
    ownerGovernment: new FormControl(' '),//หน่วยงานต้นเรื่อง
    replyAddress : new FormControl(' '),//ที่อยู่ตอบกลับ
    ownerNumber: new FormControl(' '),//เลขส่งต้นเรื่อง
    personStatus : new FormControl(' '), // ผู้ต้องหา suspect /พยาน witness
    crimeNumber : new FormControl(' '), //เลขคดีดำ / เลขคดี
    suffererAndSuspect : new FormControl(' '), //ผู้เสียหาย / ผู้ต้องหา
    charg : new FormControl(' '), //ข้อหา
    deadline : new FormControl(' '), //วันนัดหมาย
    copy: new FormControl(' '), //ฉบับ
    lastName: new FormControl(' '),
    username: new FormControl(' '),
    fullName: new FormControl(' '), //ชื่อสกุล
    address : new FormControl(' '), //ที่อยู่บุคคลในหมาย
    submissionResult : new FormControl(' '), //ผลการส่ง
    detailMap : new FormControl(' '), //รายละเอียดเส้นทาง
  });

  ownerGovernmentNgmodel : any
  numberSubmissionNgmodel : any

  ngOnInit(): void {

  } 

  myForm = this.fb.group({
    documents: this.fb.array([])
  });
 
  submitForm() {
    return 0;
  }

  onSubmit(){

  }

  generateElements() {
    this.elementArray = Array(this.countNum).fill(0).map((_, i) => i + 1);
  }


}

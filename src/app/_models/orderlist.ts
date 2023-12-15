export interface OderList {
    idorder : number
    order_idStation : string //รหัสหน่วนงาน
    order_numTitle: string //เลขหนังสือ
    order_date: string //ลงวันที่
    order_idStation2: string //หน่วยงานต้นเรื่อง
    order_numTitle2: string //เลขส่งต้นเรื่อง
    order_date2: string //ลงวันที่หน่วยงานต้นเรื่อง
    order_crimeNumber: string //เลขคดี/เลขคดีดำ
    order_suffererAndSuspect: string //คดีระหว่าง
    order_charg: string //ข้อหา
    order_copy: string //จำนวนหมาย
    order_copy2: string //จำนวนหนังสือ
    order_idPerson: string //รหัส - บุคคล
    order_idAddress: string //รหัส - ที่อยู่
    order_idResult: string //รหัส - ผลลัพธ์
    order_numOut: string //เลขส่งออก
}
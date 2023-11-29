
export interface Paper {
    id: number;
    stationSubmission : string // หน่วยงานส่งเรื่อง
    numberSubmission : string //เลขส่งเรื่อง
    dateSubmission : string //วัน/เดือน/ปีที่ส่งเรื่อง
    ownerGovernment: string //หน่วยงานต้นเรื่อง
    replyAddress : string //ที่อยู่ตอบกลับ
    ownerNumber: string //เลขส่งต้นเรื่อง
    personStatus : string; // ผู้ต้องหา suspect /พยาน witness
    crimeNumber : string //เลขคดีดำ / เลขคดี
    type : string
    suffererAndSuspect : string //คดีระว่าง - ผู้เสียหาย / ผู้ต้องหา
    charg : string //ข้อหา
    deadline : string //วันนัดหมาย
    copy: string //ฉบับ
    lastName: string;
    username: string;
    fullName: string //ชื่อสกุล
    address : string //ที่อยู่บุคคลในหมาย
    submissionResult : string //ผลการส่ง
    detailMap : string //รายละเอียดเส้นทาง
    token?: string;
}
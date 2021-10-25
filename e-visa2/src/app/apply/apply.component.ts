import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ApplyService } from './apply.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  isUpdate: Boolean;
  name: String;
  mobile: Number;
  email: String;
  address: String;
  city: String;
  pincode: Number;
  passportNo: String;
  passportIssueCity: String;
  passportIssueDate: String;
  passportExpiryDate: String;
  documentDetails: String;
  pastTourDetails: String;
  personId : any;


  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params :any) => {
       this.personId = params.id;
       if(this.personId){

         this.applyService.getSingleApply(this.personId).subscribe((res:any) => {
           console.log(res)
           if(res){
             this.isUpdate = true;
             this.name = res.person.name;
             this.mobile = res.person.mobile;
             this.email = res.person.email;
             this.address = res.person.address;
             this.city = res.person.city;
             this.pincode = res.person.pincode;
             this.passportNo = res.person.passportNo;
             this.passportIssueCity = res.person.passportIssueCity;
             this.passportIssueDate = res.person.passportIssueDate;
             this.passportExpiryDate = res.person.passportExpiryDate;
             this.documentDetails = res.person.documentDetails;
             this.pastTourDetails = res.person.pastTourDetails;
            }
            
          });
        }
      }
    );
   }
  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  constructor(private applyService: ApplyService, private route: ActivatedRoute) {
    this.personId = null;
    this.name = "";
    this.mobile = 0;
    this.email = ""
    this.address = "";
    this.city = ""
    this.pincode = 0;
    this.passportNo = "";
    this.passportIssueCity = "";
    this.passportIssueDate = "";
    this.passportExpiryDate = "";
    this.documentDetails = "";
    this.pastTourDetails = "";
    this.isUpdate = false;
  }

  applyData: any;

  getApply() {
    console.log('something');
    this.applyService.getApply().subscribe(res => {
      console.log(res);
      this.applyData = res;
    });
  }

  clearData(){
    this.personId = null;
    this.name = "";
    this.mobile = 0;
    this.email = ""
    this.address = "";
    this.city = ""
    this.pincode = 0;
    this.passportNo = "";
    this.passportIssueCity = "";
    this.passportIssueDate = "";
    this.passportExpiryDate = "";
    this.documentDetails = "";
    this.pastTourDetails = "";
  }

  postApply() {
    if(!this.personId){
      this.applyService
      .postApply({
        name: this.name,
        mobile: this.mobile,
        email: this.email,
        address: this.address,
        city: this.city,
        pincode: this.pincode,
        passportNo: this.passportNo,
        passportIssueCity: this.passportIssueCity,
        passportIssueDate: this.passportIssueDate,
        passportExpiryDate: this.passportExpiryDate,
        documentDetails: this.documentDetails,
        pastTourDetails: this.pastTourDetails,
      })
      .subscribe(res => {
        console.log(res);
        this.clearData();
      });
    } else {
      this.applyService
      .updateApply(this.personId, {
        name: this.name,
        mobile: this.mobile,
        email: this.email,
        address: this.address,
        city: this.city,
        pincode: this.pincode,
        passportNo: this.passportNo,
        passportIssueCity: this.passportIssueCity,
        passportIssueDate: this.passportIssueDate,
        passportExpiryDate: this.passportExpiryDate,
        documentDetails: this.documentDetails,
        pastTourDetails: this.pastTourDetails,
      })
      .subscribe(res => {
        console.log(res);
        this.clearData();
      });
    }
    }
    
  // onVisaApply() {
  //   const person = {
  //     name: this.name,
  //     mobile: this.mobile,
  //     email: this.email,
  //     address: this.address,
  //     city: this.city,
  //     pincode: this.pincode,
  //     passportNo: this.passportNo,
  //     passportIssueCity: this.passportIssueCity,
  //     passportIssueDate: this.passportIssueDate,
  //     passportExpiryDate: this.passportExpiryDate,
  //     currentAdd: this.currentAdd,

  //   }
  // }
}


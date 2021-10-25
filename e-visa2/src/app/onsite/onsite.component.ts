import { Component , OnInit  } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { onSiteService } from './onsite.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-onsite',
  templateUrl: './onsite.component.html',
  styleUrls: ['./onsite.component.css']
})

export class OnsiteComponent implements OnInit {
  isUpdate:boolean
  _id:String
  personId: String
  visaIssueDate:String 
  days: String
  travelDate: String
  returnDate: String
  projectName: String
  workingPeriod: String
  workingPlace: String
  jobDescription: String
  otherDetails:String 

  persons: any
 
  ngOnInit(): void {
    this.onsiteservice.getPersons().subscribe( res => {
      this.persons = res;      
    })
    
    this.route.queryParams
      .subscribe((params :any) => {
       this.personId = params.id;
       if(this.personId){
         this.onsiteservice.getSingleVisa(this.personId).subscribe((res:any) => {
           console.log(res)
           if(res){
             this._id = res.visa._id;
             this.personId = res.visa.personId;
             this.visaIssueDate = res.visa.visaIssueDate;
             this.days= res.visa.days;
             this.travelDate= res.visa.travelDate;
             this.returnDate = res.visa.returnDate;
             this.projectName = res.visa.projectName;
             this.workingPeriod = res.visa.workingPeriod;
             this.workingPlace = res.visa.workingPlace;
             this.jobDescription = res.visa.jobDescription;
             this.otherDetails = res.visa.otherDetails;
             this.isUpdate = true;
             console.log('update');
            }
          });
        }
      }
    );
  }
  

  constructor(private onsiteservice : onSiteService,private route: ActivatedRoute ) {
    this._id = ""
    this.personId = "";
    this.visaIssueDate ="";
    this.days= ""
    this.travelDate= "";
    this.returnDate = ""
    this.projectName = "";
    this.workingPeriod = "";
    this.workingPlace = "";
    this.jobDescription = "";
    this.otherDetails = "";
    this.isUpdate = false

    this.persons = [];
  }

  onSiteData:any;

  postOnSite() {
    console.log('something');
    this.onsiteservice
    .postOnSite({
      personId: this.personId,
      visaIssueDate: this.visaIssueDate,
      days: this.days,
      travelDate: this.travelDate,
      returnDate: this.returnDate,
      projectName: this.projectName,
      workingPeriod: this.workingPeriod,
      workingPlace: this.workingPlace,
      jobDescription: this.jobDescription,
      otherDetails: this.otherDetails,
    })
    .subscribe(res => {
      console.log(res);
      this.onSiteData = res;
      this.personId = "";
    this.visaIssueDate ="";
    this.days= ""
    this.travelDate= "";
    this.returnDate = ""
    this.projectName = "";
    this.workingPeriod = "";
    this.workingPlace = "";
    this.jobDescription = "";
    this.otherDetails = "";
    });
  }

  putOnSite() {
    console.log('something');
    this.onsiteservice
    .putOnSite( this._id ,{
      personId: this.personId,
      visaIssueDate: this.visaIssueDate,
      days: this.days,
      travelDate: this.travelDate,
      returnDate: this.returnDate,
      projectName: this.projectName,
      workingPeriod: this.workingPeriod,
      workingPlace: this.workingPlace,
      jobDescription: this.jobDescription,
      otherDetails: this.otherDetails,
    })
    .subscribe(res => {
      console.log(res);
      this.onSiteData = res;
    });
  }

  submitData() {
    if(this.isUpdate) this.putOnSite()
    else this.postOnSite()
  }

  getOnSite() {
    this.onsiteservice
    .getOnSite()
    .subscribe(res => {
      console.log(res);
    });
  }

}

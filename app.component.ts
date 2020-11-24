import { Component } from '@angular/core';
import {User} from './user';
import {EnrollmentserviceService} from './enrollmentservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _enrollementservice : EnrollmentserviceService){

  }
  title = 'angularforms';
  topics=['Angular','Node','MongoDB','Postgresql'];
  submitForm:boolean=false;
  errorMessage;
  successMessage;

  userModel= new User('','rob@test.com',1234,'','morning',true);

  SubmitForm(){
    this.submitForm=true;
    console.log("Insode Form Submit");
      this._enrollementservice.enroll(this.userModel)
      .subscribe(data=>
          {
            this.successMessage="Data Submitted Successsfully" 
          },
          error=>{
              this.errorMessage = error.statusText
          });
  }
  
}

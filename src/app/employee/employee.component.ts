import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  authForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.authForm=this.fb.group(
      {
        emailAddress:['',[Validators.required,Validators.email]],
        passwordData:['',[Validators.required,Validators.minLength(4),Validators.maxLength(7)]]
      }
    )
  }

  signup(){
    console.log(this.authForm.value);
  }


}

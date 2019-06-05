import { Component, OnInit, ViewChild, ElementRef, OnChanges, AfterViewInit, DoCheck } from '@angular/core';

interface Course{
  name:string,
  fee:number,
  online:boolean
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit,DoCheck{
 
  
  

  header:string;
  x:number=100;
  y:number=200;
  available:boolean=true;
  name:string="Eric";
  company:string='RJT';
  courses:Course[]=[
    {
      name:'java',
      fee:1000,
      online:true
    },
    {
      name:'android',
      fee:2000,
      online:false
    },
    {
      name:'Ios',
      fee:3000,
      online:true
    }
  ];
 
  @ViewChild('ssn')ssn:ElementRef;
 
  @ViewChild('template')templateVariable:ElementRef;

  constructor() { 
    this.header="Trainers";
    console.log(this.ssn);
    
  }

  ngOnInit() {
    console.log(this.templateVariable)
  }

  // ngDoCheck(): void {   
  //   console.log(this.ssn)
  // }
  

  handleClick($event){
  console.log("TCL: StudentComponent -> handleClick -> event", event)
    
    console.log('button clicked')
  }
  handleSSN(value){
  console.log("TCL: StudentComponent -> handleSSN -> value", value)
  }
}

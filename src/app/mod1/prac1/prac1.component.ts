import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { Prac2Component } from "../prac2/prac2.component";

@Component({
  selector: 'app-prac1',
  imports: [FormsModule, ReactiveFormsModule, NgIf, Prac2Component],
  templateUrl: './prac1.component.html',
  styleUrl: './prac1.component.scss',
  standalone:true
})
export class Prac1Component implements OnInit {
name= ''
data= '';
loginPage!:FormGroup;
nameCtrl: any;
hello!: FormGroup

parentData = '';
outputData='';




constructor(private fb:FormBuilder){

}

receivedMessage = "";

  receiveDataFromChild(data: string) {
    this.receivedMessage = data;
    // ⬆ $event data yahan aayega
  }


  ngOnInit(): void {

    this.loginPage = this.fb.group({

      name:['', Validators.required],
      email:[''],
      password:['']
  })


 this.hello = this.fb.group({
  name:['',Validators.required],
  email:['',Validators.required],
  password:['',Validators.required]
 })



}

dataEve(data:any){
  this.outputData = data
}

login(){
  // alert('welcome')
if(this.loginPage.valid){
  
  const raja = this.loginPage.value;
  console.log(raja,'form ki value')

  if(raja.name == "himanshu" &&
  raja.email == "aa@gmail" &&
  raja.password == "123" )
  {
    alert('Success')

  }    else{
      alert('fail')
    }
}
}
 


tdf(form:any){
   if (form.valid) {

    const formValue = form.value;
    console.log(formValue, "form ki value");

    if (
      formValue.name === "himanshu" &&
      formValue.email === "aa@gmail" &&
      formValue.password === "123"
    ) {
      alert("Success");
    } else {
      alert("Fail");
    }
  }
}

click(){

  if(this.hello.valid){
    const hell = this.hello.value
  }
 
}






}

import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checked:boolean = false;
  myhidden(){
   this.checked=!this.checked;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

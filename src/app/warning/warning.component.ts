import { Component, OnInit } from '@angular/core';
declare var $; 
@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  constructor() { 
 
     $.alert({
       title:'Warning', theme: 'black',
       content:'First Warning Alert'
     }) ;
 
  }

  ngOnInit() {
  }

}

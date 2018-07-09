import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor() {   
      $.alert({
    title:'Success',  
    content:'First Success Alert'
  }) ;}

  ngOnInit() {
  }

}

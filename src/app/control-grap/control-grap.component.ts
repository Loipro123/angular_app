import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-grap',
  templateUrl: './control-grap.component.html',
  styleUrls: ['./control-grap.component.scss']
})
export class ControlGrapComponent implements OnInit {

  constructor() { }
  data:any = {'Red':2, 'Blue':20, 'Yellow':19, 'Green':30, 'Purple':24, 'Orange':50};
  hoz_data:any = [];
  ver_data:any= [];
  graph = true;
  table = true;
  toogleTable = () => {
    this.table = true;
    this.graph = false;
  }
  toogleGraph = () => {
    this.table = false;
    this.graph = true;
  }
  seperateArray = () => {
    for (var property in this.data) {
     if ( ! this.data.hasOwnProperty(property)) {
      continue;
     }
     this.hoz_data.push(property);
     this.ver_data.push(this.data[property]);
     this.graph = false;
     }
  }

  ngOnInit(): void {
  }
  

}

import { Component,Input, OnInit } from '@angular/core';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() headers: any;
  @Input() rows: any;
  constructor() { }

  ngOnInit(): void {
  }
  
}

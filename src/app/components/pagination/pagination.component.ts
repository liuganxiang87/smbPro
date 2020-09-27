import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Output() pageIndexChange =new EventEmitter();
  @Input() page:any={
    index:1,
    size:20,
    total:20
  }

  constructor() { }

  ngOnInit() {
  }
  nzPageIndexChange(pageIndex:any){
    // console.log(pageIndex);
    this.pageIndexChange.emit(pageIndex)

  }
}

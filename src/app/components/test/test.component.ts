import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class DemoComponent implements OnInit {
  @Input() we: any;
  @Input() zi: any = 'opopo';
  @Output()
  ziChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  emit() {
    debugger
    this.zi = '发射出去了';
    this.ziChange.emit(this.zi)

  }

}

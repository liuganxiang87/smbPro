import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immigration-parent',
  templateUrl: './immigration-parent.component.html',
  styleUrls: ['./immigration-parent.component.css']
})
export class ImmigrationParentComponent implements OnInit {
  stageTwo: string = "信息";
  stageFour: string = "高管信息";
  index: number = 0;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moving-parent',
  templateUrl: './moving-parent.component.html',
  styleUrls: ['./moving-parent.component.css']
})
export class MovingParentComponent implements OnInit {
  stageTwo: string = "信息";
  stageFour: string = "高管信息";
  index: number = 0;
  constructor() { }

  ngOnInit() {
  }

}

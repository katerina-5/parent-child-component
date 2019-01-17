import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  title = 'app';
  public string1 = <string> 'Data from parent ...';
  public string2 = '';
  
  changeChildData() {
    this.string1 += ' Changed ';
  }
  
  receiveFromChild(evnt) {
    this.string2 = evnt;
  }

  constructor() { }

  ngOnInit() {
  }

}

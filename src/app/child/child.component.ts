import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() inFromParent: string;

  @Output() outToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
    this.outToParent.emit('Child sent this message to parent...');
  }

}

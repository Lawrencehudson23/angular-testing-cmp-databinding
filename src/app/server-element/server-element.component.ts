import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None, // None, ShadowDom
})
export class ServerElementComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('svrElement') element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit(): void {}
}

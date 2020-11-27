import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // tslint:disable-next-line: no-output-rename
  @Output('sCreated') serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // tslint:disable-next-line: no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  // NOTE: @ViewChild
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement) {
    console.log(
      'this.serverContentInput: ',
      this.serverContentInput.nativeElement.value
    );
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}

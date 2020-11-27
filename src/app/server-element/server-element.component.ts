import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None, // None, ShadowDom
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('svrElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true })
  paragraph: ElementRef;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges called');
    console.log('changes: ', changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content:', this.header.nativeElement.textContent);
    console.log('contentParagraph:', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit called');
    console.log(
      'contentParagraph==>',
      this.paragraph.nativeElement.textContent
    );
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterViewInit called');
    console.log('Text Content:', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy called');
  }
}

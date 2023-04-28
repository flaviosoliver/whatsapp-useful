import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  routeTo(sectionId: string) {
    const section = document.querySelector(sectionId);
    if (section) {
      console.log(section.scrollIntoView());
      setTimeout(
        () => section.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        0
      );
    }
  }

  externalRoute() {
    window.open('https://github.com/flaviosoliver/whatsapp-useful/');
  }
}

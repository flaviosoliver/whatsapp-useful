import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  routeTo(sectionId: string) {
    let el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView();
    }
  }

  ngOnInit() {}
}

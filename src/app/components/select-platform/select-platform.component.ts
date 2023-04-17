import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-platform',
  templateUrl: './select-platform.component.html',
  styleUrls: ['./select-platform.component.scss'],
})
export class SelectPlatformComponent implements OnInit {
  @Output() selectionChanged = new EventEmitter<string>();
  selectedValue: string = '';
  options = [
    { label: 'WhatsApp Web', value: 'web', disabled: false },
    { label: 'App WhatsApp', value: 'app', disabled: false },
  ];

  constructor() {}

  ngOnInit() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.selectedValue = 'app';
      this.options[0].disabled = true;
    }
  }
}

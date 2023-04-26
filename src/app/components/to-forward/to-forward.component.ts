import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-forward',
  templateUrl: './to-forward.component.html',
  styleUrls: ['./to-forward.component.scss'],
})
export class ToForwardComponent implements OnInit {
  selectedValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSelectionChanged(value: string) {
    this.selectedValue = value;
  }
}

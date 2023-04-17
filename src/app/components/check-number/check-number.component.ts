import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-number',
  templateUrl: './check-number.component.html',
  styleUrls: ['./check-number.component.scss'],
})
export class CheckNumberComponent implements OnInit {
  phoneNumber: string = '';
  selectedValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSelectionChanged(value: string) {
    this.selectedValue = value;
  }

  phoneNumberChanged(value: string) {
    this.phoneNumber = value;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-to',
  templateUrl: './send-to.component.html',
  styleUrls: ['./send-to.component.scss'],
})
export class SendToComponent implements OnInit {
  phoneNumber: string = '';
  selectedValue: string = '';
  msgErrorTextarea: string =
    'Opção "Com mensagem" marcada. Deve conter uma mensagem';

  constructor() {}

  ngOnInit(): void {}

  onSelectionChanged(value: string) {
    this.selectedValue = value;
  }

  phoneNumberChanged(value: string) {
    this.phoneNumber = value;
  }
}

import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-qrcode',
  templateUrl: './dialog-qrcode.component.html',
  styleUrls: ['./dialog-qrcode.component.scss'],
})
export class DialogQrCodeComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}
}

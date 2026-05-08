import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-qrcode',
  templateUrl: './dialog-qrcode.component.html',
  styleUrls: ['./dialog-qrcode.component.scss'],
})
export class DialogQrCodeComponent implements OnInit {
  safeQrCode!: SafeHtml | string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    if (this.data.isSvg) {
      this.safeQrCode = this.sanitizer.bypassSecurityTrustHtml(this.data.qrCode);
    } else {
      this.safeQrCode = this.data.qrCode;
    }
  }
}

import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogQrCodeComponent } from '../dialog-qrcode/dialog-qrcode.component';

@Component({
  selector: 'app-form-number',
  templateUrl: './form-number.component.html',
  styleUrls: ['./form-number.component.scss'],
})
export class FormNumberComponent implements OnChanges {
  @Input() message: string = '';
  @Input() platform: string = '';
  @Input() msgErrorTextarea: string = '';
  @Input() checkboxSection!: boolean;
  @Input() msgSection: boolean = false;
  @Input() phoneSection: boolean = false;
  @Output() phoneNumber = new EventEmitter<string>();
  @Output() link = new EventEmitter<string>();

  URL: string = '';
  URLQrCode: string = '';
  URLBrowser: string = 'https://web.whatsapp.com/send/';
  URLApp: string = 'https://api.whatsapp.com/send/';
  URLChart: string =
    'https://chart.googleapis.com/chart?chs=230x230&cht=qr&chl=';
  phoneForm: FormGroup = this.fb.group({
    phone: [''],
    withMessage: [true],
    message: [
      { value: this.getTime(), disabled: false },
      [Validators.minLength(1)],
    ],
  });

  constructor(private fb: FormBuilder, private dialogService: MatDialog) {}

  ngOnChanges(changes: SimpleChanges) {}

  getPlatform(): string {
    if (this.platform === 'web') {
      return this.URLBrowser;
    } else {
      return this.URLApp;
    }
  }

  getTime(): string {
    return new Date().getHours() <= 11
      ? 'Olá, bom dia!'
      : new Date().getHours() <= 17
      ? 'Olá, boa tarde!'
      : 'Olá, boa noite!';
  }

  handleActiveMessage() {
    if (this.phoneForm.controls.withMessage.value === true) {
      this.phoneForm.get('message')?.enable();
      this.phoneForm.controls['withMessage'].dirty;
    } else {
      this.phoneForm.controls.message.setValue('');
      this.phoneForm.get('message')?.disable();
    }
  }

  isValidForm(): boolean {
    const phone = this.phoneForm.controls.phone;
    const message = this.phoneForm.controls.message;

    if (this.phoneSection && this.msgSection) {
      return !phone.errors && !message.errors;
    }

    if (this.msgSection) {
      const withMessage = this.phoneForm.controls.withMessage.value;
      if (withMessage) {
        if (message.value.trim() === '') {
          message.setErrors({ minlength: { requiredLength: 1 } });
          return false;
        }
        return !message.errors;
      }
    } else if (this.phoneSection) {
      return !phone.errors;
    }

    return false;
  }

  paragraphEncode(text: string): string {
    const line = text.split('\n');
    const paragraph = line.map((line) => `${line.trim()}`);
    const result = paragraph.join('%0A');

    return result;
  }

  generateLink() {
    let tel = this.phoneForm.controls.phone.value.slice(1);
    this.message = this.phoneForm.controls.message.value;
    this.message = this.paragraphEncode(this.message);
    this.phoneNumber.emit(tel);

    switch (true) {
      case !this.msgSection:
      case this.message == '':
        this.URL = `${this.getPlatform()}?phone=${tel}`;
        this.URLQrCode = `${this.URLChart}${this.URL}`;
        break;
      case this.message.length > 0 && tel.length > 0:
        this.URL = `${this.getPlatform()}?phone=${tel}&text=${this.message}`;
        this.URLQrCode = `${this.URLChart}${this.URL}`;
        break;
      case this.message.length > 0:
        this.URL = `${this.getPlatform()}?text=${this.message}`;
        this.link.emit(this.URL);
        break;
      default:
        break;
    }
    this.link.emit(this.URL);
  }

  handleSubmit() {
    this.generateLink();
    window.open(this.URL, '_blank');
  }

  openDialog() {
    this.generateLink();
    this.dialogService
      .open(DialogQrCodeComponent, {
        data: { qrCode: this.URLQrCode },
        disableClose: false,
      })
      .afterClosed();
  }
}

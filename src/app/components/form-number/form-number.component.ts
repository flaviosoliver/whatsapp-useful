import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-number',
  templateUrl: './form-number.component.html',
  styleUrls: ['./form-number.component.scss'],
})
export class FormNumberComponent implements OnChanges {
  @Input() message: string = '';
  @Input() file: string = '';
  @Input() platform: string = '';
  @Input() sendSection: boolean = false;
  @Output() phoneNumber = new EventEmitter<string>();

  btnDisabled: boolean = true;
  URL: string = '';
  URLBrowser: string = 'https://web.whatsapp.com/send?';
  URLApp: string = 'https://api.whatsapp.com/send?';
  phoneForm: FormGroup = this.fb.group({
    phone: [''],
    withMessage: [false],
    message: [
      { value: this.getTime(), disabled: true },
      [Validators.minLength(1)],
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.phoneForm);
    console.log(this.btnDisabled);
  }

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
    if (this.phoneForm.controls['withMessage'].value === true) {
      this.phoneForm.get('message')?.enable();
      this.phoneForm.controls['withMessage'].dirty;
    } else {
      this.phoneForm.get('message')?.disable();
    }
  }

  isValidForm(): boolean {
    const phoneValid = !this.phoneForm.controls.phone.errors;
    if (this.phoneForm.controls.withMessage.value) {
      if (this.phoneForm.controls.message.value == '')
        this.phoneForm.controls.message.setErrors({ minLength: true });
      const messageValid =
        !this.phoneForm.controls.message.errors &&
        this.phoneForm.controls.message.value !== '';
      return phoneValid && messageValid;
    } else {
      return phoneValid;
    }
  }

  handlePhoneNumber() {
    let tel = this.phoneForm.controls['phone'].value.slice(1);
    this.phoneNumber.emit(tel);
    if (this.message.length === 0 && this.file.length === 0) {
      console.log(this.getPlatform());
      window.open(`${this.getPlatform()}phone=${tel}`, '_blank');
    }
    if (this.message) {
      console.log(this.getPlatform());
      window.open(`${this.getPlatform()}text=${this.message}`, '_blank');
    }
    if (this.file) {
      console.log('mandar arquivo');
    }
  }
}

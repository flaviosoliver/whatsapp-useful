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
  @Input() inputName: string = '';
  @Input() sendSection: boolean = false;
  @Output() phoneNumber = new EventEmitter<string>();

  btnDisabled: boolean = true;
  URL: string = '';
  URLBrowser: string = 'https://web.whatsapp.com/send?';
  URLApp: string = 'https://api.whatsapp.com/send?';
  phoneForm: FormGroup = this.fb.group({
    phone: [''],
    withMessage: [false],
    message: [{ value: '', disabled: true }, [Validators.minLength(1)]],
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

  handleActiveMessage() {
    this.validationForm();
    if (this.phoneForm.controls['withMessage'].value === true) {
      this.phoneForm.get('message')?.enable();
      this.phoneForm.controls['withMessage'].dirty;
    } else {
      this.phoneForm.get('message')?.disable();
    }
  }

  validationForm(): boolean {
    console.log('validação');
    console.log(this.phoneForm);
    // validar se tem msg
    if (this.phoneForm.controls['withMessage'].value === true) {
      // tem msg
      if (
        this.phoneForm.controls['phone'].dirty &&
        this.phoneForm.controls['phone'].errors &&
        this.phoneForm.controls['message'].value.length == 0
      ) {
        // fomulário inválido
        this.btnDisabled = true;
        console.log('tem msg, phone e msg inválidos');
        console.log(this.phoneForm);
        return false;
      } else {
        // formulário válido
        return true;
      }
    } else if (
      // não tem msg
      this.phoneForm.controls['phone'].dirty &&
      this.phoneForm.controls['phone'].errors
    ) {
      // phone inválido
      this.btnDisabled = true;
      console.log('não tem msg, phone inválido');
      console.log(this.phoneForm);
      return false;
    } else {
      // formulário válido
      this.btnDisabled = false;
      console.log('form válido');
      console.log(this.phoneForm);
      return true;
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

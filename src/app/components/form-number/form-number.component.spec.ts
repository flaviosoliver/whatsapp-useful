import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { FormNumberComponent } from './form-number.component';
import { DialogQrCodeComponent } from '../dialog-qrcode/dialog-qrcode.component';

describe('FormNumberComponent', () => {
  let component: FormNumberComponent;
  let fixture: ComponentFixture<FormNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormNumberComponent, DialogQrCodeComponent],
      imports: [
        ReactiveFormsModule,
        MatDialogModule,
        NgxMatIntlTelInputComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable message textarea by default', () => {
    const messageTextarea = fixture.debugElement.query(
      By.css('.check-number-form-field-message textarea')
    ).nativeElement;
    expect(messageTextarea.disabled).toBeTrue();
  });

  it('should enable message textarea when checkbox is clicked', () => {
    const messageCheckbox = fixture.debugElement.query(
      By.css('.check-number-form-field-message mat-checkbox')
    ).nativeElement;
    const messageTextarea = fixture.debugElement.query(
      By.css('.check-number-form-field-message textarea')
    ).nativeElement;
    messageCheckbox.click();
    fixture.detectChanges();

    expect(messageTextarea.disabled).toBeFalse();
  });

  it('should emit phone number on form submit', () => {
    spyOn(component.phoneNumber, 'emit');

    const phoneInput = fixture.debugElement.query(
      By.css('.check-number-form-field-tel ngx-mat-intl-tel-input input')
    ).nativeElement;
    const submitButton = fixture.debugElement.query(
      By.css('.check-number-form-btn-area button:first-child')
    ).nativeElement;

    phoneInput.value = '+55 31 999999999';
    phoneInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    submitButton.click();

    expect(component.phoneNumber.emit).toHaveBeenCalledWith('+55 31 999999999');
  });

  it('should emit link on QR code button click', () => {
    spyOn(component.link, 'emit');
    const qrCodeButton = fixture.debugElement.query(
      By.css('.check-number-form-btn-area button:last-child')
    ).nativeElement;

    qrCodeButton.click();

    expect(component.link.emit).toHaveBeenCalled();
  });
});

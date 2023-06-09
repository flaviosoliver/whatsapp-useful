/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SendToComponent } from './send-to.component';

describe('SendToComponent', () => {
  let component: SendToComponent;
  let fixture: ComponentFixture<SendToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

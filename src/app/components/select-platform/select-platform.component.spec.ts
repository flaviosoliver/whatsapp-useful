/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelectPlatformComponent } from './select-platform.component';

describe('SelectPlatformComponent', () => {
  let component: SelectPlatformComponent;
  let fixture: ComponentFixture<SelectPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPlatformComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

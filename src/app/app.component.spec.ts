import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [AppComponent, ToolbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the toolbar component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-toolbar')).toBeTruthy();
  });

  it('should render the about container', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.about-container')).toBeTruthy();
  });

  it('should render the send to component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-send-to')).toBeTruthy();
  });

  it('should render the to forward component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-to-forward')).toBeTruthy();
  });

  it('should render the info container', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.info-container')).toBeTruthy();
  });

  it('should render the footer container', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.footer-container')).toBeTruthy();
  });
});

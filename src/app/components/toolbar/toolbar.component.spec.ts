import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { MatMenuModule } from '@angular/material/menu';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [ToolbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call routeTo method when menu item clicked', () => {
    spyOn(component, 'routeTo');
    const menuItem = fixture.nativeElement.querySelector(
      'button.mat-menu-item'
    );
    menuItem.click();
    expect(component.routeTo).toHaveBeenCalled();
  });

  it('should call externalRoute method when GitHub link clicked', () => {
    spyOn(window, 'open');
    const githubLink = fixture.nativeElement.querySelector(
      'button.mat-menu-item:last-child'
    );
    githubLink.click();
    expect(window.open).toHaveBeenCalledWith(
      'https://github.com/flaviosoliver/whatsapp-useful/'
    );
  });
});

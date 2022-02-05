import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrByReactiveFormsComponent } from './registr-by-reactive-forms.component';

describe('RegistrByReactiveFormsComponent', () => {
  let component: RegistrByReactiveFormsComponent;
  let fixture: ComponentFixture<RegistrByReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrByReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrByReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

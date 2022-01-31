import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductWithAPIComponent } from './add-product-with-api.component';

describe('AddProductWithAPIComponent', () => {
  let component: AddProductWithAPIComponent;
  let fixture: ComponentFixture<AddProductWithAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductWithAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductWithAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

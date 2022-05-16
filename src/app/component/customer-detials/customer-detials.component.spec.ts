import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetialsComponent } from './customer-detials.component';

describe('CustomerDetialsComponent', () => {
  let component: CustomerDetialsComponent;
  let fixture: ComponentFixture<CustomerDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

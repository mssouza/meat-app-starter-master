import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCoastComponent } from './delivery-coast.component';

describe('DeliveryCoastComponent', () => {
  let component: DeliveryCoastComponent;
  let fixture: ComponentFixture<DeliveryCoastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryCoastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

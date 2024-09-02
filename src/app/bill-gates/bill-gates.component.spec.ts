import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillGatesComponent } from './bill-gates.component';

describe('BillGatesComponent', () => {
  let component: BillGatesComponent;
  let fixture: ComponentFixture<BillGatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillGatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillGatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

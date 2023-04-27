import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVisaComponent } from './card-visa.component';

describe('CardVisaComponent', () => {
  let component: CardVisaComponent;
  let fixture: ComponentFixture<CardVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

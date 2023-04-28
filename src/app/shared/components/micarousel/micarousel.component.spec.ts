import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicarouselComponent } from './micarousel.component';

describe('MicarouselComponent', () => {
  let component: MicarouselComponent;
  let fixture: ComponentFixture<MicarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

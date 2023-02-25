import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsCardComponent } from './trainings-card.component';

describe('TrainingsCardComponent', () => {
  let component: TrainingsCardComponent;
  let fixture: ComponentFixture<TrainingsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

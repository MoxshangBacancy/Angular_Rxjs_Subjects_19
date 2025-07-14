import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCounterComponent } from './switch-counter.component';

describe('SwitchCounterComponent', () => {
  let component: SwitchCounterComponent;
  let fixture: ComponentFixture<SwitchCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

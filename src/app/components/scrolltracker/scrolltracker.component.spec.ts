import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolltrackerComponent } from './scrolltracker.component';

describe('ScrolltrackerComponent', () => {
  let component: ScrolltrackerComponent;
  let fixture: ComponentFixture<ScrolltrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrolltrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrolltrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

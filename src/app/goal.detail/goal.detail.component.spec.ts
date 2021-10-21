import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goal.DetailComponent } from './goal.detail.component';

describe('Goal.DetailComponent', () => {
  let component: Goal.DetailComponent;
  let fixture: ComponentFixture<Goal.DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Goal.DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Goal.DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

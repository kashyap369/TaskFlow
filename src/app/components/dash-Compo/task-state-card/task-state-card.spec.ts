import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStateCard } from './task-state-card';

describe('TaskStateCard', () => {
  let component: TaskStateCard;
  let fixture: ComponentFixture<TaskStateCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskStateCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskStateCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

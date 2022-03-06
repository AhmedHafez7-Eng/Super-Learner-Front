import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAccountComponent } from './instructor-account.component';

describe('InstructorAccountComponent', () => {
  let component: InstructorAccountComponent;
  let fixture: ComponentFixture<InstructorAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

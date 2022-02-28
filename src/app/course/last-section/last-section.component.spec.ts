import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSectionComponent } from './last-section.component';

describe('LastSectionComponent', () => {
  let component: LastSectionComponent;
  let fixture: ComponentFixture<LastSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackFormComponent } from './feed-back-form.component';

describe('FeedBackFormComponent', () => {
  let component: FeedBackFormComponent;
  let fixture: ComponentFixture<FeedBackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedBackFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

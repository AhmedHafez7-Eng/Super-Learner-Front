import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFirstSecComponent } from './about-first-sec.component';

describe('AboutFirstSecComponent', () => {
  let component: AboutFirstSecComponent;
  let fixture: ComponentFixture<AboutFirstSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFirstSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFirstSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThirdSecComponent } from './about-third-sec.component';

describe('AboutThirdSecComponent', () => {
  let component: AboutThirdSecComponent;
  let fixture: ComponentFixture<AboutThirdSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutThirdSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutThirdSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsecSecComponent } from './aboutsec-sec.component';

describe('AboutsecSecComponent', () => {
  let component: AboutsecSecComponent;
  let fixture: ComponentFixture<AboutsecSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutsecSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutsecSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

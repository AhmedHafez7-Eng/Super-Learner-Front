import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFourthSecComponent } from './about-fourth-sec.component';

describe('AboutFourthSecComponent', () => {
  let component: AboutFourthSecComponent;
  let fixture: ComponentFixture<AboutFourthSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFourthSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFourthSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

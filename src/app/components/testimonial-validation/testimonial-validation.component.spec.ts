import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialValidationComponent } from './testimonial-validation.component';

describe('TestimonialValidationComponent', () => {
  let component: TestimonialValidationComponent;
  let fixture: ComponentFixture<TestimonialValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

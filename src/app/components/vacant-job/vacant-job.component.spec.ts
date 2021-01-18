import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantJobComponent } from './vacant-job.component';

describe('VacantJobComponent', () => {
  let component: VacantJobComponent;
  let fixture: ComponentFixture<VacantJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacantJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacantJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

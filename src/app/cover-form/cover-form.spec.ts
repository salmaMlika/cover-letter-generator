import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverForm } from './cover-form';

describe('CoverForm', () => {
  let component: CoverForm;
  let fixture: ComponentFixture<CoverForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

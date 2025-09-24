import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesParent } from './directives-parent';

describe('DirectivesParent', () => {
  let component: DirectivesParent;
  let fixture: ComponentFixture<DirectivesParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

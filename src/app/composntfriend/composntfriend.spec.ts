import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composntfriend } from './composntfriend';

describe('Composntfriend', () => {
  let component: Composntfriend;
  let fixture: ComponentFixture<Composntfriend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composntfriend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composntfriend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoListe } from './exo-liste';

describe('ExoListe', () => {
  let component: ExoListe;
  let fixture: ComponentFixture<ExoListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

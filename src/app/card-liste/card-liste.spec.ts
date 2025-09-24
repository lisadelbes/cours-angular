import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListe } from './card-liste';

describe('CardListe', () => {
  let component: CardListe;
  let fixture: ComponentFixture<CardListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

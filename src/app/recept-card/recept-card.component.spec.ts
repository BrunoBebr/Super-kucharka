import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptCardComponent } from './recept-card.component';

describe('ReceptCardComponent', () => {
  let component: ReceptCardComponent;
  let fixture: ComponentFixture<ReceptCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

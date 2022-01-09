import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapovedaReceptComponent } from './napoveda-recept.component';

describe('NapovedaReceptComponent', () => {
  let component: NapovedaReceptComponent;
  let fixture: ComponentFixture<NapovedaReceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapovedaReceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NapovedaReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

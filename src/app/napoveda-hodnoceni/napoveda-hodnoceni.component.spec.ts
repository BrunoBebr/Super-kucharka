import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapovedaHodnoceniComponent } from './napoveda-hodnoceni.component';

describe('NapovedaHodnoceniComponent', () => {
  let component: NapovedaHodnoceniComponent;
  let fixture: ComponentFixture<NapovedaHodnoceniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapovedaHodnoceniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NapovedaHodnoceniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

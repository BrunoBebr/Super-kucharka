import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapovedaPostupComponent } from './napoveda-postup.component';

describe('NapovedaPostupComponent', () => {
  let component: NapovedaPostupComponent;
  let fixture: ComponentFixture<NapovedaPostupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapovedaPostupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NapovedaPostupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

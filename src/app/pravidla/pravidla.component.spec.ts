import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PravidlaComponent } from './pravidla.component';

describe('PravidlaComponent', () => {
  let component: PravidlaComponent;
  let fixture: ComponentFixture<PravidlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PravidlaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PravidlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaculdaComponent } from './vaculda.component';

describe('VaculdaComponent', () => {
  let component: VaculdaComponent;
  let fixture: ComponentFixture<VaculdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaculdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaculdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

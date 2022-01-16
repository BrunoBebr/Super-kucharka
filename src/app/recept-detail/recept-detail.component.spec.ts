import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptDetailComponent } from './recept-detail.component';

describe('ReceptDetailComponent', () => {
  let component: ReceptDetailComponent;
  let fixture: ComponentFixture<ReceptDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


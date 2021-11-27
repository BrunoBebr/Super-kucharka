import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptAddComponent } from './recept-add.component';

describe('ReceptAddComponent', () => {
  let component: ReceptAddComponent;
  let fixture: ComponentFixture<ReceptAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

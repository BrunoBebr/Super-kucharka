import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VznikWebuComponent } from './vznikwebu.component';

describe('VznikWebuComponent', () => {
  let component: VznikWebuComponent;
  let fixture: ComponentFixture<VznikWebuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VznikWebuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VznikWebuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebrickyComponent } from './zebricky.component';

describe('ZebrickyComponent', () => {
  let component: ZebrickyComponent;
  let fixture: ComponentFixture<ZebrickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZebrickyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZebrickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

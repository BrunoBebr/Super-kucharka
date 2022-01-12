import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoporuceneComponent } from './doporucene.component';

describe('DoporuceneComponent', () => {
  let component: DoporuceneComponent;
  let fixture: ComponentFixture<DoporuceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoporuceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoporuceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

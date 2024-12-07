import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegonComponent } from './segon.component';

describe('SegonComponent', () => {
  let component: SegonComponent;
  let fixture: ComponentFixture<SegonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

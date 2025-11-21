import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prac1Component } from './prac1.component';

describe('Prac1Component', () => {
  let component: Prac1Component;
  let fixture: ComponentFixture<Prac1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prac1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prac1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgePillComponent } from './badge-pill.component';

describe('BadgePillComponent', () => {
  let component: BadgePillComponent;
  let fixture: ComponentFixture<BadgePillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgePillComponent]
    });
    fixture = TestBed.createComponent(BadgePillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

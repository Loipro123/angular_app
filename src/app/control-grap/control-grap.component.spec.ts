import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlGrapComponent } from './control-grap.component';

describe('ControlGrapComponent', () => {
  let component: ControlGrapComponent;
  let fixture: ComponentFixture<ControlGrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlGrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlGrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

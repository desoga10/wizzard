import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepthreeComponent } from './stepthree.component';

describe('StepthreeComponent', () => {
  let component: StepthreeComponent;
  let fixture: ComponentFixture<StepthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

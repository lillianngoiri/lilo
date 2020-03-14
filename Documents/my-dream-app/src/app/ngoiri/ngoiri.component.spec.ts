import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoiriComponent } from './ngoiri.component';

describe('NgoiriComponent', () => {
  let component: NgoiriComponent;
  let fixture: ComponentFixture<NgoiriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoiriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

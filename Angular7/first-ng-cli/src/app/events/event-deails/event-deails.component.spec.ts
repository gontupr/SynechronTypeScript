import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDeailsComponent } from './event-deails.component';

describe('EventDeailsComponent', () => {
  let component: EventDeailsComponent;
  let fixture: ComponentFixture<EventDeailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDeailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDeailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

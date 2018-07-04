import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineNavComponent } from './wine-nav.component';

describe('WineNavComponent', () => {
  let component: WineNavComponent;
  let fixture: ComponentFixture<WineNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

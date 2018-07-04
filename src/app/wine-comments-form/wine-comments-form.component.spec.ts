import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineCommentsFormComponent } from './wine-comments-form.component';

describe('WineCommentsFormComponent', () => {
  let component: WineCommentsFormComponent;
  let fixture: ComponentFixture<WineCommentsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineCommentsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineCommentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

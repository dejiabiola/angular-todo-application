import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TODOITEMComponent } from './todoitem.component';

describe('TODOITEMComponent', () => {
  let component: TODOITEMComponent;
  let fixture: ComponentFixture<TODOITEMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TODOITEMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TODOITEMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

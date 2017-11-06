import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentCategoria } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponentCategoria;
  let fixture: ComponentFixture<IndexComponentCategoria>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponentCategoria ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

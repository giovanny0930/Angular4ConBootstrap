import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentPreventa} from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponentPreventa;
  let fixture: ComponentFixture<IndexComponentPreventa>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponentPreventa ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentPreventa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

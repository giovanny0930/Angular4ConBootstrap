import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentProductoDistribuidor} from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponentProductoDistribuidor;
  let fixture: ComponentFixture<IndexComponentProductoDistribuidor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponentProductoDistribuidor ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentProductoDistribuidor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

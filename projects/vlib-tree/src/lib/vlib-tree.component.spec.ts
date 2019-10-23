import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlibTreeComponent } from './vlib-tree.component';

describe('VlibTreeComponent', () => {
  let component: VlibTreeComponent;
  let fixture: ComponentFixture<VlibTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlibTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlibTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

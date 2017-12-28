import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablewithpaginationComponent } from './tablewithpagination.component';

describe('TablewithpaginationComponent', () => {
  let component: TablewithpaginationComponent;
  let fixture: ComponentFixture<TablewithpaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablewithpaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablewithpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

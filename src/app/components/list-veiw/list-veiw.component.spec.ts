import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVeiwComponent } from './list-veiw.component';

describe('ListVeiwComponent', () => {
  let component: ListVeiwComponent;
  let fixture: ComponentFixture<ListVeiwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVeiwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVeiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

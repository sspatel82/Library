import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritepageComponent } from './favoritepage.component';

describe('FavoritepageComponent', () => {
  let component: FavoritepageComponent;
  let fixture: ComponentFixture<FavoritepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

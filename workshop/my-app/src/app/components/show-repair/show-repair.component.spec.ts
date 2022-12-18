import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRepairComponent } from './show-repair.component';

describe('ShowRepairComponent', () => {
  let component: ShowRepairComponent;
  let fixture: ComponentFixture<ShowRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

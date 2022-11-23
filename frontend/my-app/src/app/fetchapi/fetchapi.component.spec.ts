import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchapiComponent } from './fetchapi.component';

describe('FetchapiComponent', () => {
  let component: FetchapiComponent;
  let fixture: ComponentFixture<FetchapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

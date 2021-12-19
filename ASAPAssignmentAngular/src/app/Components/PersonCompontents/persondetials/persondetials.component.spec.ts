import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersondetialsComponent } from './persondetials.component';

describe('PersondetialsComponent', () => {
  let component: PersondetialsComponent;
  let fixture: ComponentFixture<PersondetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersondetialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersondetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

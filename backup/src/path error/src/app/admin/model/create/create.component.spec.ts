/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Create } from './create';

describe('CreateComponent', () => {
  let component: Create;
  let fixture: ComponentFixture<Create>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Create);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

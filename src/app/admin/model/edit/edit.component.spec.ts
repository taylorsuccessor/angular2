/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Edit } from './edit';

describe('EditComponent', () => {
  let component: Edit;
  let fixture: ComponentFixture<Edit>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edit ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

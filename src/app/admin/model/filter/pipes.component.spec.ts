/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilterArrayPipe } from './pipes.component';

describe('FilterArrayPipe', () => {
  let component: FilterArrayPipe;
  let fixture: ComponentFixture<FilterArrayPipe>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterArrayPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterArrayPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

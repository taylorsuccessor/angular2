/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Show } from './show';

describe('ShowComponent', () => {
  let component: Show;
  let fixture: ComponentFixture<Show>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Show ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Show);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

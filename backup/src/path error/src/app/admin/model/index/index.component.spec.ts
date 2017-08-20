/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Index } from './indexs';

describe('IndexComponent', () => {
  let component: Index;
  let fixture: ComponentFixture<Index>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

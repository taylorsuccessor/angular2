/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Example } from './example';

describe('ExampleComponent', () => {
  let component: Example;
  let fixture: ComponentFixture<Example>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

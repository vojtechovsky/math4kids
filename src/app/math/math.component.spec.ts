/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core';

import {MathComponent} from './math.component';
import {MathService} from "./shared/math.service";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";


describe('MathComponent', () => {
  let component: MathComponent;
  let fixture: ComponentFixture<MathComponent>;


  /*
  Mock class to use router parameter
   */
  class MockActivatedRoute  {
    constructor() {
      this.snapshot.params = {};
      this.snapshot.params['id'] = "r1";
    }
      snapshot : ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
  }


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [MathComponent],
      providers: [
        MathService,
        { provide: ActivatedRoute, useClass: MockActivatedRoute},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('must be created', () => {
    expect(component).toBeTruthy();
  });
});

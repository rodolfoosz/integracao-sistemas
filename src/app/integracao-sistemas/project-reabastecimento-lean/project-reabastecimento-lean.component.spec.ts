/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProjectReabastecimentoLeanComponent } from './project-reabastecimento-lean.component';

describe('ProjectReabastecimentoLeanComponent', () => {
  let component: ProjectReabastecimentoLeanComponent;
  let fixture: ComponentFixture<ProjectReabastecimentoLeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectReabastecimentoLeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectReabastecimentoLeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

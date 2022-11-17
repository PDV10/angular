import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialesCubosComponent } from './tutoriales-cubos.component';

describe('TutorialesCubosComponent', () => {
  let component: TutorialesCubosComponent;
  let fixture: ComponentFixture<TutorialesCubosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialesCubosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialesCubosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

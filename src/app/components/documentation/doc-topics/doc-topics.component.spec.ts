import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTopicsComponent } from './doc-topics.component';

describe('DocTopicsComponent', () => {
  let component: DocTopicsComponent;
  let fixture: ComponentFixture<DocTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

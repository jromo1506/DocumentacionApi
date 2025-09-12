import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocEndpointStepsComponent } from './doc-endpoint-steps.component';

describe('DocEndpointStepsComponent', () => {
  let component: DocEndpointStepsComponent;
  let fixture: ComponentFixture<DocEndpointStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocEndpointStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocEndpointStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocEndpointRequestComponent } from './doc-endpoint-request.component';

describe('DocEndpointRequestComponent', () => {
  let component: DocEndpointRequestComponent;
  let fixture: ComponentFixture<DocEndpointRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocEndpointRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocEndpointRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

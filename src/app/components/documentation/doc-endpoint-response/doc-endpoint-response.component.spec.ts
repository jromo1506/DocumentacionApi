import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocEndpointResponseComponent } from './doc-endpoint-response.component';

describe('DocEndpointResponseComponent', () => {
  let component: DocEndpointResponseComponent;
  let fixture: ComponentFixture<DocEndpointResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocEndpointResponseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocEndpointResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

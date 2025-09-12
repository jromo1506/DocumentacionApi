import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocEndpointComponent } from './doc-endpoint.component';

describe('DocEndpointComponent', () => {
  let component: DocEndpointComponent;
  let fixture: ComponentFixture<DocEndpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocEndpointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocEndpointCodeComponent } from './doc-endpoint-code.component';

describe('DocEndpointCodeComponent', () => {
  let component: DocEndpointCodeComponent;
  let fixture: ComponentFixture<DocEndpointCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocEndpointCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocEndpointCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { DocEndpointStepsComponent } from '../doc-endpoint-steps/doc-endpoint-steps.component';
import { DocEndpointRequestComponent } from '../doc-endpoint-request/doc-endpoint-request.component';
import { DocEndpointResponseComponent } from '../doc-endpoint-response/doc-endpoint-response.component';
import { DocEndpointCodeComponent } from '../doc-endpoint-code/doc-endpoint-code.component';

@Component({
  selector: 'app-doc-endpoint',
  imports: [DocEndpointStepsComponent,DocEndpointRequestComponent,DocEndpointResponseComponent,DocEndpointCodeComponent],
  templateUrl: './doc-endpoint.component.html',
  styleUrl: './doc-endpoint.component.scss'
})
export class DocEndpointComponent {

}

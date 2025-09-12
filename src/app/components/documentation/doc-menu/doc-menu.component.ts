import { Component } from '@angular/core';
import { DocEndpointComponent } from '../doc-endpoint/doc-endpoint.component';

@Component({
  selector: 'app-doc-menu',
  imports: [DocEndpointComponent],
  templateUrl: './doc-menu.component.html',
  styleUrl: './doc-menu.component.scss'
})
export class DocMenuComponent {

}

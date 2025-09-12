import { Component } from '@angular/core';
import { DocInfoComponent } from '../doc-info/doc-info.component';
import { DocMenuComponent } from '../doc-menu/doc-menu.component';
import { DocTopicsComponent } from '../doc-topics/doc-topics.component';

@Component({
  selector: 'app-api-doc',
  imports: [DocInfoComponent,DocMenuComponent,DocTopicsComponent],
  templateUrl: './api-doc.component.html',
  styleUrl: './api-doc.component.scss'
})
export class ApiDocComponent {

}

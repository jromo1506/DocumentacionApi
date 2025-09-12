import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocInfoComponent } from './components/documentation/doc-info/doc-info.component';
import { DocMenuComponent } from './components/documentation/doc-menu/doc-menu.component';
import { DocTopicsComponent } from './components/documentation/doc-topics/doc-topics.component';
import { ApiDocComponent } from './components/documentation/api-doc/api-doc.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ApiDocComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'documentacion';
}

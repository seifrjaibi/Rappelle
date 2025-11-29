import { Component, signal } from '@angular/core';
import { ContactListComponent } from "./components/contact-list-component/contact-list-component";


@Component({
  selector: 'app-root',
    standalone: true,
  imports: [ContactListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RappelleAngularFrontEnd');
}



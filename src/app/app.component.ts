import { Component } from '@angular/core';
import { RacesService } from './services/races.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RacesService]
})
export class AppComponent {
  title = 'app';
}

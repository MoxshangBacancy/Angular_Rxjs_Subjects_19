import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ScrolltrackerComponent } from './components/scrolltracker/scrolltracker.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { SwitchCounterComponent } from './components/switch-counter/switch-counter.component';

@Component({
  selector: 'app-root',
  imports: [SearchBoxComponent, ScrolltrackerComponent, SaveButtonComponent,SwitchCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs_subjects_19';
}

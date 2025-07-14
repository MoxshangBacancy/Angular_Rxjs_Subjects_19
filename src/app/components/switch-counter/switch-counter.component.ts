import { Component } from '@angular/core';
import { fromEvent, switchScan, interval, take } from 'rxjs';

@Component({
  selector: 'app-switch-counter',
  imports: [],
  templateUrl: './switch-counter.component.html',
  styleUrl: './switch-counter.component.scss'
})
export class SwitchCounterComponent {
count = 0;

  onClick() {
    fromEvent(document, 'click')
      .pipe(
        switchScan(() => interval(500).pipe(take(10)), 0)
      )
      .subscribe(val => (this.count = val));
  }
}

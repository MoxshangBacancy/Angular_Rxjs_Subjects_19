import { Component } from '@angular/core';
import { of, Subject, timer } from 'rxjs';
import { exhaustMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-save-button',
  standalone: true,
templateUrl: './save-button.component.html'
})
export class SaveButtonComponent {
  private saveClicks$ = new Subject<void>();

  constructor() {
    this.saveClicks$
      .pipe(
        exhaustMap(() => {
          console.log('Saving...');
          return timer(2000).pipe(tap(() => console.log('Saved!')));
        })
      )
      .subscribe();
  }

  onSave() {
    this.saveClicks$.next();
  }
}

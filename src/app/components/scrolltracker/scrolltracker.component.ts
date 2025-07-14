import { Component } from '@angular/core';
import { auditTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-scrolltracker',
  imports: [],
  templateUrl: './scrolltracker.component.html',
  styleUrl: './scrolltracker.component.scss'
})
export class ScrolltrackerComponent {
 scrollY = 0;

 ngOnInit(){
  fromEvent(window, 'scroll')
  .pipe(
    auditTime(3000),
    map(() => window.scrollY)
  )
  .subscribe(y => {
    this.scrollY = y;
  });
 }
}

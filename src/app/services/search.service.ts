import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchHistory$ = new ReplaySubject<string>(5);

  addSearch(term: string){
    const trimmed = term.trim();
    if(trimmed){
      this.searchHistory$.next(trimmed);
    }
  }

  getHistory(){
    return this.searchHistory$.asObservable();
  }
}

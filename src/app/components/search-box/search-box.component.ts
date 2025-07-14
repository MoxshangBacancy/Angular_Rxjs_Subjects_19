import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-box',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
 search = signal('');
 history = signal<string[]>([]);

 private sub = new Subscription();

 constructor(private searchService: SearchService){
    this.sub = this.searchService.getHistory().subscribe(term => {
      this.history.update(current => {
        const updated = [term, ...current.filter(t=> t !== term)];
        return updated.slice(0,5);
      });
    });
 }

 submit(){
  if(this.search().trim()){
    this.searchService.addSearch(this.search());
    this.search.set('');  
  }
 }

 ngOnDestroy(){
  this.sub.unsubscribe();
 }
 
}

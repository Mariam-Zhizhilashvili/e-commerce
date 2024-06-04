import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {


  selectedCategory : string = 'all';

  @Output()
  onSelect: EventEmitter<string> = new EventEmitter<string>()

  filterCategories(){
    this.onSelect.emit(this.selectedCategory)
  }

}

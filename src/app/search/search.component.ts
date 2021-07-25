import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent {
  @Input()
  public repositories;
  @Input()
  public repositoriesCount;
  @Output()
  public searchString: EventEmitter<string> = new EventEmitter<string>()
  @ViewChild('input', {static: true})
  public input;

  public searchTerm: string = '';
  public searchHistory = [];

  public search() {
    if(!this.input.nativeElement.value) {
      return;
    }
    this.getInputValue();
    this.searchHistory.push(this.searchTerm);
    this.searchString.emit(this.searchTerm);
  }

  public getInputValue(): string {
    this.searchTerm = this.input.nativeElement.value;
    this.input.nativeElement.value = '';
    return this.searchTerm;
  }

}

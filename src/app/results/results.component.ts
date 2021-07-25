import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResultsComponent{
  @Input()
  public repositories;
}

import {Component, Input, ViewEncapsulation} from '@angular/core';
import {IRepository} from "../../config";

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RepositoryCardComponent {

  @Input()
  public repository: IRepository;

}

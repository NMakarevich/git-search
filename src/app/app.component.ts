import {Component, ViewEncapsulation} from '@angular/core';
import {SearchRepositoriesService} from "./search-repositories.service";
import {IRepository} from "./config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [SearchRepositoriesService]
})
export class AppComponent{

  public constructor(
    private searchRepositories: SearchRepositoriesService
  ) {
  }

  title = 'Git Search';
  public repositories$: IRepository[];
  public repositoriesCount: number;

  public getSearchData(term: string) {
    this.searchRepositories.getRepositories(term)
      .subscribe(data => {
        this.repositories$ = data.items;
        this.repositoriesCount = data.total_count;
      })
  }
}

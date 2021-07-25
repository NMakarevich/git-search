import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL_TOKEN} from "./config";

@Injectable()
export class SearchRepositoriesService {

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL_TOKEN) private baseUrl
  ) { }

  public getRepositories(searchTerm): any {
     return this.http.get(`${this.baseUrl}${searchTerm}`);
  }
}

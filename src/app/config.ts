import {environment} from "../environments/environment";
import {InjectionToken} from "@angular/core";

export const BASE_URL = environment.baseUrl;
export const BASE_URL_TOKEN = new InjectionToken(BASE_URL);

export interface IRepository {
  name: string,
  html_url: string,
  language: string,
  forks: string,
  watchers: string,
  owner: {
    avatar_url: string,
    login: string,
    html_url: string,
  }
}


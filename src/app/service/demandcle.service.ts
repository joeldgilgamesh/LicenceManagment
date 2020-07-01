import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URLS} from "../Config/api.url.config.askkey";
import {Modedemandecle} from "../model/modedemandecle";

@Injectable({
  providedIn: 'root'
})
export class DemandcleService {

  constructor(private httpClient : HttpClient) { }

  sendAskKey(modedemandecle: any): Observable<any>{
    return this.httpClient.post(API_URLS.AskKey, modedemandecle);

  }
}

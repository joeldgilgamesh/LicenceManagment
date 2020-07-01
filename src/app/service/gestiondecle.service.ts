import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URLS} from "../Config/api.url.cofig.gestionaction";
import {Modelmanegekey} from "../model/modelmanegekey";

@Injectable({
  providedIn: 'root'
})
export class GestiondecleService {

  constructor(private http: HttpClient) { }
  getDatagestion(): Observable<any> {
    return this.http.get(API_URLS.AskparamKey);
  }
  getDataById( activation_key: number): Observable<any>{
    return this.http.get(API_URLS.AskparamKey+ `/${ activation_key}`);
  }

  addDatagestion(modelmanegekey: Modelmanegekey): Observable<any> {
    return this.http.post(API_URLS.AskparamKey, modelmanegekey);

  }

  updateDatagestion(modelmanegekey: Modelmanegekey): Observable<any> {
    return this.http.patch(API_URLS.AskparamKey, modelmanegekey);
  }

  deleteKey( activation_key: number): Observable<any> {
    return this.http.delete(API_URLS.AskparamKey + `/${ activation_key}`);
  }


}

// @ts-ignore
import {ServiceProduit} from "../model/service-produit";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {API_URLS} from "../Config/api.url.config.user";

@Injectable()
export class UserService {
  private user: User []  ;

  constructor( private http: HttpClient) {
  }

  getUserList(): Observable<any>{
    return this.http.get(API_URLS.USER_URL);
  }
  getUserById(id: number): Observable<any>{
    return this.http.get(API_URLS.USER_URL + `/${id}`);
  }
  addUser(user: User): Observable<any>{
    return this.http.post(API_URLS.USER_URL, user);
  }
  updateUser(user: User): Observable<any>{
    return this.http.patch(API_URLS.USER_URL, user);
  }
  deleteUser(id: number): Observable<any>{
    return this.http.delete(API_URLS.USER_URL + `/${id}`);
  }

}

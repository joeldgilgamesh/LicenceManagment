import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URLS} from '../Config/api.url.config.contact';
import {Contacts} from "../model/contacts";

@Injectable()
export class ContactsService {


  constructor(private http: HttpClient) {}

  getContactserv(): Observable<any> {
    return this.http.get(API_URLS.CONTACT_URL);
  }
  getByIdContact(id: number): Observable<any>{
    return this.http.get(API_URLS.CONTACT_URL+ `/${id}`);
  }

  addContact(contact: Contacts): Observable<any> {
    return this.http.post(API_URLS.CONTACT_URL, contact);

  }

  updateContact(contact: Contacts): Observable<any> {
    return this.http.patch(API_URLS.CONTACT_URL, contact);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(API_URLS.CONTACT_URL + `/${id}`);
  }
}

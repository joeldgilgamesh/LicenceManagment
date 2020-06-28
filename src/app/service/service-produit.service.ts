// @ts-ignore
import {Servicepro, ServiceProduit} from "../model/service-produit";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {API_URLS} from "../Config/api.url.config.service-produit";

@Injectable()
export class ServiceProduitService {


  constructor( private http: HttpClient) {
  }

  getService_produit(): Observable<any>{
    return this.http.get(API_URLS.SERVICEP_RODUIT_URL);
  }
  getByIdService_produit(id: number): Observable<any>{
    return this.http.get(API_URLS.SERVICEP_RODUIT_URL + `/${id}`);
  }
  addService_produit(service_produit: ServiceProduit): Observable<any>{
    return this.http.post(API_URLS.SERVICEP_RODUIT_URL, service_produit);
  }
  updateService_produit(service_produit: ServiceProduit): Observable<any>{
    return this.http.patch(API_URLS.SERVICEP_RODUIT_URL, service_produit);
  }
  deleteService_produit(id: number): Observable<any>{
    return this.http.delete(API_URLS.SERVICEP_RODUIT_URL + `/${id}`);
  }

}

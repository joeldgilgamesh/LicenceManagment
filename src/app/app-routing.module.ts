import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {ConnexionComponent} from "./connexion/connexion.component";
import {UserComponent} from "./user/user.component";
import {ClientsComponent} from "./clients/clients.component";
import {CreateServiceProductComponent} from "./create-service-product/create-service-product.component";
// @ts-ignore
import {ServiceProduit} from "./model/service-produit";
import {Observable, of} from "rxjs";
import {CreateClientsComponent} from "./create-clients/create-clients.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {AuthGuardService} from "./service/auth-guard.service";
import {Contacts} from "./model/contacts";
import {ContactComponent} from "./contact/contact.component";
import {CreateContactComponent} from "./create-contact/create-contact.component";
import {ContactsService} from "./service/contacts.service";
import {ProductServiceComponent} from "./product-service/product-service.component";
import {ServiceProduitService} from "./service/service-produit.service";
import {ProductService} from "./model/product-service";
import {User} from "./model/user";
import {UserService} from "./service/user.service";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SingleClientsComponent} from "./single-clients/single-clients.component";
import {DemandecleComponent} from "./demandecle/demandecle.component";
import {GestioncleComponent} from "./gestioncle/gestioncle.component";
import {Modelmanegekey} from "./model/modelmanegekey";
import {GestiondecleService} from "./service/gestiondecle.service";
import {CreateGestioncleComponent} from "./create-gestioncle/create-gestioncle.component";


@Injectable({providedIn: "root"})
export class ActionManagementResolve implements Resolve<Contacts> {
  constructor(private contactService: ContactsService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Contacts> {
    const id = route.params['id'];
    if (id) {
      return this.contactService.getByIdContact(id);
    }
    return of(new Contacts());
  }
}

@Injectable({providedIn: "root"})
export class ActionResolveProduct implements Resolve<ProductService> {
  constructor(private serviceProduitService: ServiceProduitService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ProductService> {
    const id = route.params['id'];
    if (id) {
      return this.serviceProduitService.getByIdService_produit(id);
    }
    return of(new ProductService());
  }

}

@Injectable({providedIn: "root"})
export class ActionResolveClient implements Resolve<User> {
  constructor(private  userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const id = route.params['id'];
    if (id) {
      return this.userService.getUserById(id);
    }
    return of(new User());
  }
}
@Injectable({providedIn: "root"})
export class ActionManagementGestioncle implements Resolve<Modelmanegekey>{
  constructor(private gestiondecleService: GestiondecleService) {
  }
  resolve(route: ActivatedRouteSnapshot): Observable<Modelmanegekey>  {
    const id = route.params['activation_key'];
    if(id){
      return this.gestiondecleService.getDataById(id);
    }
    // @ts-ignore
    return of(new Modelmanegekey());
  }

}


const routes: Routes = [
  {path: 'services-produit', canActivate: [AuthGuardService], component: ProductServiceComponent},
  {path: 'clients', canActivate: [AuthGuardService], component: ClientsComponent},
  {path: 'view-client/:id', canActivate: [AuthGuardService], component: SingleClientsComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'formulaire-cle', component: DemandecleComponent},
  {path: 'create-contact', component: CreateContactComponent},
  {path: 'manage-key', component: GestioncleComponent},

  // {path: 'contact', component: ContactComponent},
  // {path: 'connexion', canActivate: [AuthGuardService], component: ConnexionComponent},
  // {path: 'user', canActivate: [AuthGuardService], component: UserComponent},

  {
    path: 'create-servcie-product',
    component: CreateServiceProductComponent, canActivate: [AuthGuardService],
    resolve: {sp1: ActionResolveProduct},
  },

  {
    path: 'update-servcie-product/:id',
    component: CreateServiceProductComponent, canActivate: [AuthGuardService],
    resolve: {
      sp1: ActionResolveProduct
    },

  },
  {
    path: 'create-client',
    component: CreateClientsComponent, canActivate: [AuthGuardService],
    resolve: {sp2: ActionResolveClient},
  },

  {
    path: 'update-client/:id',
    component: CreateClientsComponent, canActivate: [AuthGuardService],
    resolve: {
      sp2: ActionResolveClient
    },

  },

  {
    path: 'update-gestioncle',
    component: CreateGestioncleComponent, canActivate: [AuthGuardService],
    resolve: {sp3: ActionManagementGestioncle},
  },

  {
    path: 'update-gestioncle/:id',
    component: CreateGestioncleComponent, canActivate: [AuthGuardService],
    resolve: {
      sp3: ActionManagementGestioncle
    },

  },

  /* {
     path: 'create-contact',
     component: CreateContactComponent,
     resolve: {sp: ActionManagementResolve},
   },

   {
     path: 'update-contact/:id',
     component: CreateContactComponent,
     resolve: {
       sp: ActionManagementResolve
     },

   },*/
  {path: '', component: SignInComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

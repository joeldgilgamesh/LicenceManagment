import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavabarComponent } from './navabar/navabar.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { UserComponent } from './user/user.component';
import { ClientsComponent } from './clients/clients.component';
import {FormArray, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ServiceProduitService} from "./service/service-produit.service";
import { CreateServiceProductComponent } from './create-service-product/create-service-product.component';
import { CreateClientsComponent } from './create-clients/create-clients.component';
import {UserService} from "./service/user.service";
import { SignInComponent } from './sign-in/sign-in.component';
import {AuthService} from "./service/auth.service";
import {AuthGuardService} from "./service/auth-guard.service";
import { ContactComponent } from './contact/contact.component';
import {ContactsService} from "./service/contacts.service";
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ProductServiceComponent } from './product-service/product-service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleClientsComponent } from './single-clients/single-clients.component';
import { DemandecleComponent } from './demandecle/demandecle.component';
import {DemandcleService} from "./service/demandcle.service";
import { GestioncleComponent } from './gestioncle/gestioncle.component';
import {GestiondecleService} from "./service/gestiondecle.service";
import { CreateGestioncleComponent } from './create-gestioncle/create-gestioncle.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavabarComponent,
    ConnexionComponent,
    UserComponent,
    ClientsComponent,
    CreateServiceProductComponent,
    CreateClientsComponent,
    SignInComponent,
    ContactComponent,
    CreateContactComponent,
    ProductServiceComponent,
    PageNotFoundComponent,
    SingleClientsComponent,
    DemandecleComponent,
    GestioncleComponent,
    CreateGestioncleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServiceProduitService,
    UserService,
    AuthService,
    AuthGuardService,
    ContactsService,
    DemandcleService,
    GestiondecleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

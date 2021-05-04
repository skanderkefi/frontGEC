import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Admin/login/login.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AgentBoComponent } from './agent-bo/agent-bo.component';
import { AgentcmptComponent } from './agentcmpt/agentcmpt.component';
import { LoginnavbarComponent } from './Admin/loginnavbar/loginnavbar.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { MatToolbarModule } from  '@angular/material/toolbar';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {OrderModule} from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdminnavbarComponent } from './Admin/adminnavbar/adminnavbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Facture3wmComponent } from './Admin/AdminFactures/facture3wm/facture3wm.component';
import { FacturerembComponent } from './Admin/AdminFactures/factureremb/factureremb.component';
import { FactureFinancementComponent } from './Admin/AdminFactures/facture-financement/facture-financement.component';
import { FactureFiscComponent } from './Admin/AdminFactures/facture-fisc/facture-fisc.component';
import { FactureLettreCreditComponent } from './Admin/AdminFactures/facture-lettre-credit/facture-lettre-credit.component';
import { FactureOperateurComponent } from './Admin/AdminFactures/facture-operateur/facture-operateur.component';
import { FactureComdistComponent } from './Admin/AdminFactures/facture-comdist/facture-comdist.component';
import { Bordereau3wmtndComponent } from './Admin/Adminbordereau/bordereau3wmtnd/bordereau3wmtnd.component';
import { BordereauventdirectComponent } from './Admin/Adminbordereau/bordereauventdirect/bordereauventdirect.component';
import { FournisseurComponent } from './Admin/AdminFournisseur/fournisseur/fournisseur.component';

import { BoFournisseurComponent } from './agent-bo/bo-fournisseur/bo-fournisseur.component';
import { BoB3wmtndComponent } from './agent-bo/boBordereau/bo-b3wm/bo-b3wmtnd/bo-b3wmtnd.component';
import { BoB3wmDeviseComponent } from './agent-bo/boBordereau/bo-b3wm/bo-b3wm-devise/bo-b3wm-devise.component';
import { BobventTndComponent } from './agent-bo/boBordereau/bo-bvent-dir/bobvent-tnd/bobvent-tnd.component';
import { BobventDeviseComponent } from './agent-bo/boBordereau/bo-bvent-dir/bobvent-devise/bobvent-devise.component';
import { Bofac3wmtndComponent } from './agent-bo/boFacture/bo-fac3wm/bofac3wmtnd/bofac3wmtnd.component';
import { Bofac3wmDeviseComponent } from './agent-bo/boFacture/bo-fac3wm/bofac3wm-devise/bofac3wm-devise.component';
import { BofacVentTndComponent } from './agent-bo/boFacture/bo-fact-vent-dir/bofac-vent-tnd/bofac-vent-tnd.component';
import { BofacVentDeviseComponent } from './agent-bo/boFacture/bo-fact-vent-dir/bofac-vent-devise/bofac-vent-devise.component';
import { BofacfisctndComponent } from './agent-bo/boFacture/bo-fact-fisc/bofacfisctnd/bofacfisctnd.component';
import { BofacfiscdeviseComponent } from './agent-bo/boFacture/bo-fact-fisc/bofacfiscdevise/bofacfiscdevise.component';
import { BofacoptndComponent } from './agent-bo/boFacture/bo-fact-oper/bofacoptnd/bofacoptnd.component';
import { BofacopdeviseComponent } from './agent-bo/boFacture/bo-fact-oper/bofacopdevise/bofacopdevise.component';
import { BofacfintndComponent } from './agent-bo/boFacture/bo-fact-financ/bofacfintnd/bofacfintnd.component';
import { BofacfindeviseComponent } from './agent-bo/boFacture/bo-fact-financ/bofacfindevise/bofacfindevise.component';
import { BofacletrtndComponent } from './agent-bo/boFacture/bo-fact-letcr/bofacletrtnd/bofacletrtnd.component';
import { BofacletrdeviseComponent } from './agent-bo/boFacture/bo-fact-letcr/bofacletrdevise/bofacletrdevise.component';
import { BofacrembtndComponent } from './agent-bo/boFacture/bo-fact-remb/bofacrembtnd/bofacrembtnd.component';
import { BofacrembdeviseComponent } from './agent-bo/boFacture/bo-fact-remb/bofacrembdevise/bofacrembdevise.component';
import { Bo3wmanceComponent } from './agent-bo/boFacture/bo-fac3wm/bo3wmance/bo3wmance.component';
import { Bo3wmcertComponent } from './agent-bo/boFacture/bo-fac3wm/bo3wmcert/bo3wmcert.component';
import { Bo3wmlcComponent } from './agent-bo/boFacture/bo-fac3wm/bo3wmlc/bo3wmlc.component';
import { Bo3sotetelComponent } from './agent-bo/boFacture/bo-fac3wm/bo3sotetel/bo3sotetel.component';
import { Bo3wmstegComponent } from './agent-bo/boFacture/bo-fac3wm/bo3wmsteg/bo3wmsteg.component'; 
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoFactComdistComponent } from './agent-bo/boFacture/bo-fact-comdist/bo-fact-comdist.component';
import { CrcomdisdeviseComponent } from './agent-bo/boFacture/bo-fact-comdist/crcomdisdevise/crcomdisdevise.component';

import { ComdistComponent } from './agent-bo/boBordereau/comdist/comdist.component';
import { OperateurComponent } from './agent-bo/boBordereau/operateur/operateur.component';
import { FiscaliteComponent } from './agent-bo/boBordereau/fiscalite/fiscalite.component';
import { BordlcComponent } from './agent-bo/boBordereau/bo-b3wm/bordlc/bordlc.component';
import { BordsotetelComponent } from './agent-bo/boBordereau/bo-b3wm/bordsotetel/bordsotetel.component';
import { BordanceComponent } from './agent-bo/boBordereau/bo-b3wm/bordance/bordance.component';
import { BordcertComponent } from './agent-bo/boBordereau/bo-b3wm/bordcert/bordcert.component';
import { BordstegComponent } from './agent-bo/boBordereau/bo-b3wm/bordsteg/bordsteg.component';
import { VentdirComponent } from './agent-bo/boBordereau/bo-b3wm/ventdir/ventdir.component';  
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { ObjetComponent } from './Admin/objet/objet.component';
import { PiecejointeComponent } from './Admin/piecejointe/piecejointe.component';

import { Bo3wmsotetelComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/bo3wmsotetel/bo3wmsotetel.component';
import { Bo3wmdeviseComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/bo3wmdevise/bo3wmdevise.component';
import { Bo3wmtndComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/bo3wmtnd/bo3wmtnd.component';
import { BoFactComditComponent } from './agent-bo/boFacture/rejected/bo-fact-comdit/bo-fact-comdit.component';
import { BoFactFinanceComponent } from './agent-bo/boFacture/rejected/bo-fact-finance/bo-fact-finance.component';
import { BoFactFiscComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/bo-fact-fisc.component';
import { BoFactOperComponent } from './agent-bo/boFacture/rejected/bo-fact-oper/bo-fact-oper.component';
import { BoFactRembComponent } from './agent-bo/boFacture/rejected/bo-fact-remb/bo-fact-remb.component';
import { BoFactVentDirComponent } from './agent-bo/boFacture/rejected/bo-fact-vent-dir/bo-fact-vent-dir.component';
import { rjctndBo3wmanceComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/bo3wmance/bo3wmance.component';
import { rjcanceDeviseComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/bo3wmance/devise/devise.component';
import { rjctndBo3wmcertComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/bo3wmcert/bo3wmcert.component';
import { certdeviseDeviseComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/bo3wmcert/devise/devise.component';
import { ventBo3wmlcComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/bo3wmlc/bo3wmlc.component';
import { lcrjcDeviseComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/bo3wmlc/devise/devise.component';
import { sotrjcDeviseComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/bo3wmsotetel/devise/devise.component';
import { Bo3wmstegtndrjcComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/bo3wmsteg/bo3wmsteg.component';
import { Devise3wmstegrjcComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/bo3wmsteg/devise/devise.component';
import { DevisecomdisrjcComponent } from './agent-bo/boFacture/rejected/bo-fact-comdit/devise/devise.component';
import { DevisefinrjcComponent } from './agent-bo/boFacture/rejected/bo-fact-finance/devise/devise.component';
import { fiscrjcDeviseComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/devise/devise.component';
import { operrjcDeviseComponent } from './agent-bo/boFacture/rejected/bo-fact-oper/devise/devise.component';
import { rembrjcDeviseComponent } from './agent-bo/boFacture/rejected/bo-fact-remb/devise/devise.component';
import { ventrjcDeviseComponent } from './agent-bo/boFacture/rejected/bo-fact-vent-dir/devise/devise.component';



import { Bo3wmcertenvComponent } from './agent-bo/boFacture/bo3wmcertenv/bo3wmcertenv.component';
import { AncedeviseenvComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/anceenv/ancedeviseenv/ancedeviseenv.component';
import { AncetndenvComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/anceenv/ancetndenv/ancetndenv.component';
import { CertdeviseenvComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/certenv/certdeviseenv/certdeviseenv.component';
import { CerttndenvComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/certenv/certtndenv/certtndenv.component';
import { LcdeviseenvComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/lc/lcdeviseenv/lcdeviseenv.component';
import { LctndenvComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/lc/lctndenv/lctndenv.component';
import { SotdeviseenvComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/sotetel/sotdeviseenv/sotdeviseenv.component';
import { SottndenvComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/sotetel/sottndenv/sottndenv.component';
import { StegdeviseenvComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/steg/stegdeviseenv/stegdeviseenv.component';
import { StegtndenvComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/steg/stegtndenv/stegtndenv.component';
import { DeviseComponent } from './agent-bo/boFacture/envoyés/faccomdistenv/devise/devise.component';
import { TndComponent } from './agent-bo/boFacture/envoyés/faccomdistenv/tnd/tnd.component';
import { fiscenvDeviseComponent } from './agent-bo/boFacture/envoyés/fiscenv/devise/fiscenvDevise.component'
import { fiscenvTndComponent } from './agent-bo/boFacture/envoyés/fiscenv/tnd/tnd.component'
import { openvDeviseComponent } from './agent-bo/boFacture/envoyés/operenv/devise/devise.component'
import { openvTndComponent} from './agent-bo/boFacture/envoyés/operenv/tnd/tnd.component'
import { remenvDeviseComponent } from './agent-bo/boFacture/envoyés/rembenv/devise/devise.component'
import { remenvTndComponent } from './agent-bo/boFacture/envoyés/rembenv/tnd/tnd.component'
import { ventenvTndComponent } from './agent-bo/boFacture/envoyés/ventenv/tnd/tnd.component'
import { ventenvDeviseComponent } from './agent-bo/boFacture/envoyés/ventenv/devise/devise.component'
import { finenvTndComponent } from './agent-bo/boFacture/envoyés/facfinenv/tnd/tnd.component'
import { finenvDeviseComponent } from './agent-bo/boFacture/envoyés/facfinenv/devise/devise.component'


import {CrdeviseComponent} from './agent-bo/boFacture/bo-fac3wm/bo3sotetel/devise/crdevise.component'
import {CrancedeviseComponent} from './agent-bo/boFacture/bo-fac3wm/bo3wmance/devise/crdevise.component'
import {certcrDeviseComponent} from './agent-bo/boFacture/bo-fac3wm/bo3wmcert/devise/devise.component'
import {lccrDeviseComponent} from './agent-bo/boFacture/bo-fac3wm/bo3wmlc/devise/devise.component'
import {stcrDeviseComponent} from './agent-bo/boFacture/bo-fac3wm/bo3wmsteg/devise/devise.component';
import { CrfdtndComponent } from './agent-bo/boFacture/crfondRoulement/crfdtnd/crfdtnd.component';
import { CrfddvComponent } from './agent-bo/boFacture/crfondRoulement/crfddv/crfddv.component';
import { EnvfdtndComponent } from './agent-bo/boFacture/envoyés/envfd/envfdtnd/envfdtnd.component';
import { EnvfddeviseComponent } from './agent-bo/boFacture/envoyés/envfd/envfddevise/envfddevise.component';
import { RejectedfdtndComponent } from './agent-bo/boFacture/rejected/rejectedfd/rejectedfdtnd/rejectedfdtnd.component';
import { RejectedfddeviseComponent } from './agent-bo/boFacture/rejected/rejectedfd/rejectedfddevise/rejectedfddevise.component'


const appRoute : Routes = [
  {path:'rjcanceDevise', component:rjcanceDeviseComponent},
  {path:'rjctndBo3wmance', component:rjctndBo3wmanceComponent},
  {path:'Bo3wmstegtndrjc', component:Bo3wmstegtndrjcComponent},
  {path:'Devise3wmstegrjc', component:Devise3wmstegrjcComponent},
  {path:'Rejectedfddevise', component:RejectedfddeviseComponent},
  {path:'Rejectedfdtnd', component:RejectedfdtndComponent},
  {path:'Envfddevise', component:EnvfddeviseComponent},
  {path:'Envfdtnd', component:EnvfdtndComponent},
  {path:'Crfddv', component:CrfddvComponent},
  {path:'Crfdtnd', component:CrfdtndComponent},
  {path:'openvTnd', component:openvTndComponent},
  {path:'openvDevise', component:openvDeviseComponent},
  {path:'fiscenvTnd', component:fiscenvTndComponent},
  {path:'fiscenvDevise', component:fiscenvDeviseComponent},
  {path:'finenvDevise', component:finenvDeviseComponent},
  {path:'finenvTnd', component:finenvTndComponent},
  {path:'ventenvDevise', component:ventenvDeviseComponent},
  {path:'Certtndenv', component:CerttndenvComponent},
  {path:'Certdeviseenv', component:CertdeviseenvComponent},
  {path:'Lctndenv', component:LctndenvComponent},
  {path:'Lcdeviseenv', component:LcdeviseenvComponent},
  {path:'Sottndenv', component:SottndenvComponent},
  {path:'Sotdeviseenv', component:SotdeviseenvComponent},
  {path:'Ancetndenv', component:AncetndenvComponent},
  {path:'Ancedeviseenv', component:AncedeviseenvComponent},
  {path:'Stegtndenv', component:StegtndenvComponent},
  {path:'Stegdeviseenv', component:StegdeviseenvComponent},
  {path:'certcrDevise', component:certcrDeviseComponent},
  {path:'lccrDevise', component:lccrDeviseComponent},
  {path:'CrdeviseComponent', component:CrancedeviseComponent},
  {path:'Crancedevise', component:CrancedeviseComponent},
  {path:'stcrDevise', component:stcrDeviseComponent},
  {path:'Bo3wmcertenv', component:Bo3wmcertenvComponent},
  {path:'Ancedeviseenv', component:AncedeviseenvComponent},
  {path:'Certdeviseenv', component:CertdeviseenvComponent},
  {path:'Certtndenv', component:CerttndenvComponent},
  {path:'Lcdeviseenv', component:LcdeviseenvComponent},
  {path:'Lctndenv', component:LctndenvComponent},
  {path:'Sotdeviseenv', component:SotdeviseenvComponent},
  {path:'Sottndenv', component:SottndenvComponent},
  {path:'Stegdeviseenv', component:StegdeviseenvComponent},
  {path:'Stegtndenv', component:StegtndenvComponent},
  {path:'Devise', component:DeviseComponent},
  {path:'Tnd', component:TndComponent},


  {path:'Bo3wmsotetelrejected', component:Bo3wmsotetelComponent},
  {path:'Bo3wmdeviserejected', component:Bo3wmdeviseComponent},
  {path:'Bo3wmtndrejected', component:Bo3wmtndComponent},
  {path:'BoFactComditrejected', component:BoFactComditComponent},
  {path:'BoFactFinancerejected', component:BoFactFinanceComponent},
  {path:'BoFactFiscrejected', component:BoFactFiscComponent},
  {path:'BoFactOperrejected', component:BoFactOperComponent},
  {path:'BoFactRembrejected', component:BoFactRembComponent},
  {path:'BoFactVentDirrejected', component:BoFactVentDirComponent},
  
  {path:'Ventdir', component:VentdirComponent},
  {path:'Bordsteg', component:BordstegComponent},
  {path:'Bordcert', component:BordcertComponent},
  {path:'Bordance', component:BordanceComponent},
  {path:'Bordsotetel', component:BordsotetelComponent},
  {path:'Bordlc', component:BordlcComponent},
  {path:'BoFactComdist', component:BoFactComdistComponent},
  {path:'Bo3wmlc', component:Bo3wmlcComponent},
  {path:'Bo3wmsteg', component:Bo3wmstegComponent},
  {path:'Bo3wmcert', component:Bo3wmcertComponent},
  {path:'Bo3wmance', component:Bo3wmanceComponent},
  {path:'Bo3wmsotetel', component:Bo3sotetelComponent},
  {path:'', component:LoginComponent},
  {path:'bo', component:AgentBoComponent},
  {path:'cmpt', component:AgentcmptComponent},
  {path:'admin', component:AdminComponent},
  {path:'adminfct3wm', component:Facture3wmComponent},
  {path:'adminfctremb', component:FacturerembComponent},
  {path:'adminfctfin', component:FactureFinancementComponent},
  {path:'adminfctfisc', component:FactureFiscComponent},
  {path:'adminfctltr', component:FactureLettreCreditComponent},
  {path:'adminfctop', component:FactureOperateurComponent},
  {path:'adminfctcomdist', component:FactureComdistComponent},
  {path:'adminbrd3wm', component:Bordereau3wmtndComponent},
  {path:'adminbrdventdirect', component:BordereauventdirectComponent},
  {path:'adminfournisseurs', component:FournisseurComponent},
  {path:'boFournisseur', component:BoFournisseurComponent},
  {path:'BoB3wmtnd', component:BoB3wmtndComponent},
  {path:'BoB3wmDevise', component:BoB3wmDeviseComponent},
  {path:'BobventTnd', component:BobventTndComponent},
  {path:'BobventDevise', component:BobventDeviseComponent},
  {path:'Bofac3wmtnd', component:Bofac3wmtndComponent},
  {path:'Bofac3wmDevise', component:Bofac3wmDeviseComponent},
  {path:'BofacVentTnd', component:BofacVentTndComponent},
  {path:'BofacVentDevise', component:BofacVentDeviseComponent},
  {path:'Bofacfisctnd', component:BofacfisctndComponent},
  {path:'Bofacfiscdevise', component:BofacfiscdeviseComponent},
  {path:'Bofacoptnd', component:BofacoptndComponent},
  {path:'Bofacopdevise', component:BofacopdeviseComponent},
  {path:'Bofacfintnd', component:BofacfintndComponent},
  {path:'Bofacfindevise', component:BofacfindeviseComponent},
  {path:'Bofacletrtnd', component:BofacletrtndComponent},
  {path:'Bofacletrdevise', component:BofacletrdeviseComponent},
  {path:'Bofacrembtnd', component:BofacrembtndComponent},
  {path:'Bofacrembdevise', component:BofacrembdeviseComponent}




];

// export function HttpLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient);
// }

@NgModule({
  declarations: [
    openvTndComponent,
    finenvDeviseComponent,
    finenvTndComponent,
    stcrDeviseComponent,
    lccrDeviseComponent,
    certcrDeviseComponent,
    CrancedeviseComponent,
    CrdeviseComponent,
    ventrjcDeviseComponent,
    rembrjcDeviseComponent,
    operrjcDeviseComponent,
    fiscrjcDeviseComponent,
    DevisefinrjcComponent,
    DevisecomdisrjcComponent,
    ventenvDeviseComponent,
    ventenvTndComponent,
    remenvTndComponent,
    remenvDeviseComponent,
    openvDeviseComponent,
    fiscenvTndComponent,
    Devise3wmstegrjcComponent,
    Bo3wmstegtndrjcComponent,
    sotrjcDeviseComponent,
    lcrjcDeviseComponent,
    fiscenvDeviseComponent,
    ventBo3wmlcComponent,
    certdeviseDeviseComponent,
    rjctndBo3wmcertComponent,
    rjcanceDeviseComponent,
    rjctndBo3wmanceComponent,
    AppComponent,
    LoginComponent,
    AdminComponent,
    AgentBoComponent,
    AgentcmptComponent,
    LoginnavbarComponent,
    AdminnavbarComponent,
    Facture3wmComponent,
    FacturerembComponent,
    FactureFinancementComponent,
    FactureFiscComponent,
    FactureLettreCreditComponent,
    FactureOperateurComponent,
    FactureComdistComponent,
    Bordereau3wmtndComponent,
    BordereauventdirectComponent,
    FournisseurComponent,
    BoFournisseurComponent,
    BoB3wmtndComponent,
    BoB3wmDeviseComponent,
    BobventTndComponent,
    BobventDeviseComponent,
    Bofac3wmtndComponent,
    Bofac3wmDeviseComponent,
    BofacVentTndComponent,
    BofacVentDeviseComponent,
    BofacfisctndComponent,
    BofacfiscdeviseComponent,
    BofacoptndComponent,
    BofacopdeviseComponent,
    BofacfintndComponent,
    BofacfindeviseComponent,
    BofacletrtndComponent,
    BofacletrdeviseComponent,
    BofacrembtndComponent,
    BofacrembdeviseComponent,
    Bo3wmanceComponent,
    Bo3wmcertComponent,
    Bo3wmlcComponent,
    Bo3sotetelComponent,
    Bo3wmstegComponent,
    BoFactComdistComponent,
    ComdistComponent,
    OperateurComponent,
    FiscaliteComponent,
    BordlcComponent,
    BordsotetelComponent,
    BordanceComponent,
    BordcertComponent,
    BordstegComponent,
    VentdirComponent,
    ObjetComponent,
    PiecejointeComponent,
    Bo3wmsotetelComponent,
    Bo3wmdeviseComponent,
    Bo3wmtndComponent,
    BoFactComditComponent,
    BoFactFinanceComponent,
    BoFactFiscComponent,
    BoFactOperComponent,
    BoFactRembComponent,
    BoFactVentDirComponent,
    Bo3wmcertenvComponent,
    AncedeviseenvComponent,
    AncetndenvComponent,
    CertdeviseenvComponent,
    CerttndenvComponent,
    LcdeviseenvComponent,
    LctndenvComponent,
    SotdeviseenvComponent,
    SottndenvComponent,
    StegdeviseenvComponent,
    StegtndenvComponent,
    DeviseComponent,
    TndComponent,
    CrfdtndComponent,
    CrfddvComponent,
    EnvfdtndComponent,
    EnvfddeviseComponent,
    RejectedfdtndComponent,
    RejectedfddeviseComponent
  ],
  imports: [
    NgxBootstrapMultiselectModule,
    NgbModule,
    MDBBootstrapModule,
    NgxPaginationModule,
    OrderModule,
    Ng2SearchPipeModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

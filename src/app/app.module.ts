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
 
import { boBordComdistTndComponent } from './agent-bo/boBordereau/comdist/boBordComdistTnd.component';
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
import { RejectedfddeviseComponent } from './agent-bo/boFacture/rejected/rejectedfd/rejectedfddevise/rejectedfddevise.component';

import { Cmp3wmancedeviseComponent } from './agentcmpt/cmp-fact-3wm/cmp3wmance/cmp3wmancedevise/cmp3wmancedevise.component';
import { Cmp3wmancetndComponent } from './agentcmpt/cmp-fact-3wm/cmp3wmance/cmp3wmancetnd/cmp3wmancetnd.component';
import { Cmp3wmcertdeviseComponent } from './agentcmpt/cmp-fact-3wm/cmp3wmcert/cmp3wmcertdevise/cmp3wmcertdevise.component';
import { Cmp3wmcerttndComponent } from './agentcmpt/cmp-fact-3wm/cmp3wmcert/cmp3wmcerttnd/cmp3wmcerttnd.component';
import { Cmp3wmlcdeviseComponent } from './agentcmpt/cmp-fact-3wm/cmp3wmlc/cmp3wmlcdevise/cmp3wmlcdevise.component';
import { Cmp3wmlctndComponent } from './agentcmpt/cmp-fact-3wm/cmp3wmlc/cmp3wmlctnd/cmp3wmlctnd.component';
import { Cmp3wmsotdeviseComponent } from './agentcmpt/cmp-fact-3wm/cmp3wmsotetel/cmp3wmsotdevise/cmp3wmsotdevise.component';
import { Cmp3wmsottndComponent } from './agentcmpt/cmp-fact-3wm/cmp3wmsotetel/cmp3wmsottnd/cmp3wmsottnd.component';
import { Cmp3wmstegdeviseComponent } from './agentcmpt/cmp-fact-3wm/cmp3wmsteg/cmp3wmstegdevise/cmp3wmstegdevise.component';
import { Cmp3wmstegtndComponent } from './agentcmpt/cmp-fact-3wm/cmp3wmsteg/cmp3wmstegtnd/cmp3wmstegtnd.component';
import { CmpcmddeviseComponent } from './agentcmpt/cmp-fact-comdist/cmpcmddevise/cmpcmddevise.component';
import { CmpcmdtndComponent } from './agentcmpt/cmp-fact-comdist/cmpcmdtnd/cmpcmdtnd.component';
import { CmpfddeviseComponent } from './agentcmpt/cmp-fact-fd/cmpfddevise/cmpfddevise.component';
import { CmpfdtndComponent } from './agentcmpt/cmp-fact-fd/cmpfdtnd/cmpfdtnd.component';
import { CmpfindeviseComponent } from './agentcmpt/cmp-fact-fin/cmpfindevise/cmpfindevise.component';
import { CmpfintndComponent } from './agentcmpt/cmp-fact-fin/cmpfintnd/cmpfintnd.component';
import { CmplcdeviseComponent } from './agentcmpt/cmp-fact-lc/cmplcdevise/cmplcdevise.component';
import { CmplctndComponent } from './agentcmpt/cmp-fact-lc/cmplctnd/cmplctnd.component';
import { CmpopdeviseComponent } from './agentcmpt/cmp-fact-oper/cmpopdevise/cmpopdevise.component';
import { CmpoptndComponent } from './agentcmpt/cmp-fact-oper/cmpoptnd/cmpoptnd.component';
import { CmprembdeviseComponent } from './agentcmpt/cmp-fact-remb/cmprembdevise/cmprembdevise.component';
import { CmprembtndComponent } from './agentcmpt/cmp-fact-remb/cmprembtnd/cmprembtnd.component';
import { CmpventdeviseComponent } from './agentcmpt/cmp-fact-vent-dir/cmpventdevise/cmpventdevise.component';
import { CmpventtndComponent } from './agentcmpt/cmp-fact-vent-dir/cmpventtnd/cmpventtnd.component';
import { DashboardComponent } from './agentcmpt/dashboard/dashboard.component';

import { BocrchlocdeviseComponent } from './agent-bo/boFacture/bo-fac3wm/chargeLocative/bocrchlocdevise/bocrchlocdevise.component';
import { BocrchloctndComponent } from './agent-bo/boFacture/bo-fac3wm/chargeLocative/bocrchloctnd/bocrchloctnd.component';
import { CrdouanedeviseComponent } from './agent-bo/boFacture/bo-fac3wm/douane/crdouanedevise/crdouanedevise.component';
import { CrdouanetndComponent } from './agent-bo/boFacture/bo-fac3wm/douane/crdouanetnd/crdouanetnd.component';
import { CrristournedeviseComponent } from './agent-bo/boFacture/bo-fac3wm/crristournedevise/crristournedevise.component';
import { CrristournetndComponent } from './agent-bo/boFacture/bo-fac3wm/crristournetnd/crristournetnd.component';
import { CrjtndeviseComponent } from './agent-bo/boFacture/bo-fact-fisc/jetonpresence/crjtndevise/crjtndevise.component';
import { CrjtntndComponent } from './agent-bo/boFacture/bo-fact-fisc/jetonpresence/crjtntnd/crjtntnd.component';
import { CrpitdeviseComponent } from './agent-bo/boFacture/bo-fact-fisc/paiementImpotTaxes/crpitdevise/crpitdevise.component';
import { CrpittndComponent } from './agent-bo/boFacture/bo-fact-fisc/paiementImpotTaxes/crpittnd/crpittnd.component';
import { CrretsaldeviseComponent } from './agent-bo/boFacture/bo-fact-fisc/retenueSurSalaire/crretsaldevise/crretsaldevise.component';
import { CrretsaltndComponent } from './agent-bo/boFacture/bo-fact-fisc/retenueSurSalaire/crretsaltnd/crretsaltnd.component';
import { CrchrsocdeviseComponent } from './agent-bo/boFacture/bo-fact-fisc/chargeSociale/crchrsocdevise/crchrsocdevise.component';
import { CrchrsoctndComponent } from './agent-bo/boFacture/bo-fact-fisc/chargeSociale/crchrsoctnd/crchrsoctnd.component';
import { FisclocdeviseComponent } from './agent-bo/boFacture/bo-fact-fisc/fiscalitéLocale/fisclocdevise/fisclocdevise.component';
import { FiscloctndComponent } from './agent-bo/boFacture/bo-fact-fisc/fiscalitéLocale/fiscloctnd/fiscloctnd.component';
import { PeadeviseComponent } from './agent-bo/boFacture/bo-fact-fisc/paieEtAutres/peadevise/peadevise.component';
import { CdpeatndComponent } from './agent-bo/boFacture/bo-fact-fisc/paieEtAutres/cdpeatnd/cdpeatnd.component';
import { CrfrmintdeviseComponent } from './agent-bo/boFacture/bo-fact-fisc/formateursInternes/crfrmintdevise/crfrmintdevise.component';
import { CrfrminttndComponent } from './agent-bo/boFacture/bo-fact-fisc/formateursInternes/crfrminttnd/crfrminttnd.component';
import { EnvchlocdeviseComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/chargeLocative/envchlocdevise/envchlocdevise.component';
import { EnvchloctndComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/chargeLocative/envchloctnd/envchloctnd.component';
import { EnvristournedeviseComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/envristourne/envristournedevise/envristournedevise.component';
import { EnvristournetndComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/envristourne/envristournetnd/envristournetnd.component';
import { EnvdouancedeviseComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/douane/envdouancedevise/envdouancedevise.component';
import { EnvdouanetndComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/douane/envdouanetnd/envdouanetnd.component';
import { EnvchsowdeviseComponent } from './agent-bo/boFacture/envoyés/fiscenv/chargeSociale/envchsowdevise/envchsowdevise.component';
import { EnvchsowtndComponent } from './agent-bo/boFacture/envoyés/fiscenv/chargeSociale/envchsowtnd/envchsowtnd.component';
import { EnvfiscloctndComponent } from './agent-bo/boFacture/envoyés/fiscenv/fiscalitéLocale/envfiscloctnd/envfiscloctnd.component';
import { EnvformintdeviseComponent } from './agent-bo/boFacture/envoyés/fiscenv/formateurInternes/envformintdevise/envformintdevise.component';
import { EnvforminttndComponent } from './agent-bo/boFacture/envoyés/fiscenv/formateurInternes/envforminttnd/envforminttnd.component';
import { EnvjetpresdeviseComponent } from './agent-bo/boFacture/envoyés/fiscenv/jetonPresence/envjetpresdevise/envjetpresdevise.component';
import { EnvjetprestndComponent } from './agent-bo/boFacture/envoyés/fiscenv/jetonPresence/envjetprestnd/envjetprestnd.component';
import { EnpeadeviseComponent } from './agent-bo/boFacture/envoyés/fiscenv/paieEtAutres/enpeadevise/enpeadevise.component';
import { EnvpeatndComponent } from './agent-bo/boFacture/envoyés/fiscenv/paieEtAutres/envpeatnd/envpeatnd.component';
import { EnvpittxtndComponent } from './agent-bo/boFacture/envoyés/fiscenv/paiementImportTaxes/envpittxtnd/envpittxtnd.component';
import { EnvpittxdeviseComponent } from './agent-bo/boFacture/envoyés/fiscenv/paiementImportTaxes/envpittxdevise/envpittxdevise.component';
import { EnvretsursaldeviseComponent } from './agent-bo/boFacture/envoyés/fiscenv/envretsursaldevise/envretsursaldevise.component';
import { EnvretsursaltndComponent } from './agent-bo/boFacture/envoyés/fiscenv/envretsursaltnd/envretsursaltnd.component';
import { RejchlocdeviseComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/chargeLocative/rejchlocdevise/rejchlocdevise.component';
import { RejchloctndComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/chargeLocative/rejchloctnd/rejchloctnd.component';
import { RejristtndComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/rejristourne/rejristtnd/rejristtnd.component';
import { RejristdeviseComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/rejristourne/rejristdevise/rejristdevise.component';
import { RejdouanedeviseComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/douane/rejdouanedevise/rejdouanedevise.component';
import { RejdouanetndComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/douane/rejdouanetnd/rejdouanetnd.component';
import { RejfisclocdeviseComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/fiscalitéLocale/rejfisclocdevise/rejfisclocdevise.component';
import { RejfiscloctndComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/fiscalitéLocale/rejfiscloctnd/rejfiscloctnd.component';
import { RejjetpresdeviseComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/jetonpresence/rejjetpresdevise/rejjetpresdevise.component';
import { RejjetprestndComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/jetonpresence/rejjetprestnd/rejjetprestnd.component';
import { RejpeadeviseComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/paieEtAutres/rejpeadevise/rejpeadevise.component';
import { RejpeatndComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/paieEtAutres/rejpeatnd/rejpeatnd.component';
import { RejpitxdeviseComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/paiementImpotTaxes/rejpitxdevise/rejpitxdevise.component';
import { RejpitxtndComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/paiementImpotTaxes/rejpitxtnd/rejpitxtnd.component';
import { RejretsaldeviseComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/paiementImpotTaxes/retenueSurSalaire/rejretsaldevise/rejretsaldevise.component';
import { RejretsaltndComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/paiementImpotTaxes/retenueSurSalaire/rejretsaltnd/rejretsaltnd.component';
import { RejformindeviseComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/formateurInternes/rejformindevise/rejformindevise.component';
import { RejformintndComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/formateurInternes/rejformintnd/rejformintnd.component'
import { CroacatndComponent } from './agent-bo/boFacture/bo-fac3wm/oaca/croacatnd/croacatnd.component';
import { CroacadeviseComponent } from './agent-bo/boFacture/bo-fac3wm/oaca/croacadevise/croacadevise.component';
import { EnvoacadeviseComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/oaca/envoacadevise/envoacadevise.component';
import { EnvoacatndComponent } from './agent-bo/boFacture/envoyés/bo-fac3wmenv/oaca/envoacatnd/envoacatnd.component';
import { RejoacadeviseComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/oaca/rejoacadevise/rejoacadevise.component';
import { RejoacatndComponent } from './agent-bo/boFacture/rejected/bo-fac3wm/oaca/rejoacatnd/rejoacatnd.component';
import { RejchsocdeviseComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/chargeSociale/rejchsocdevise/rejchsocdevise.component';
import { RejchsoctndComponent } from './agent-bo/boFacture/rejected/bo-fact-fisc/chargeSociale/rejchsoctnd/rejchsoctnd.component';

import { BordchlocdeviseComponent } from './agent-bo/boBordereau/bo-b3wm/chargeLocative/bordchlocdevise/bordchlocdevise.component';
import { BordchloctndComponent } from './agent-bo/boBordereau/bo-b3wm/chargeLocative/bordchloctnd/bordchloctnd.component';
import { BordristdeviseComponent } from './agent-bo/boBordereau/bo-b3wm/ristourne/bordristdevise/bordristdevise.component';
import { BordristtndComponent } from './agent-bo/boBordereau/bo-b3wm/ristourne/bordristtnd/bordristtnd.component';
import { BorddouanedeviseComponent } from './agent-bo/boBordereau/bo-b3wm/douane/borddouanedevise/borddouanedevise.component';
import { BorddouanetndComponent } from './agent-bo/boBordereau/bo-b3wm/douane/borddouanetnd/borddouanetnd.component';
import { BordoacadeviseComponent } from './agent-bo/boBordereau/bo-b3wm/oaca/bordoacadevise/bordoacadevise.component';
import { BordoacatndComponent } from './agent-bo/boBordereau/bo-b3wm/oaca/bordoacatnd/bordoacatnd.component';
import { BordchsocdeviseComponent } from './agent-bo/boBordereau/fiscalite/chargeSociale/bordchsocdevise/bordchsocdevise.component';
import { BordchsoctndComponent } from './agent-bo/boBordereau/fiscalite/chargeSociale/bordchsoctnd/bordchsoctnd.component';
import { BordformintdeviseComponent } from './agent-bo/boBordereau/fiscalite/formateursInternes/bordformintdevise/bordformintdevise.component';
import { BordforminttndComponent } from './agent-bo/boBordereau/fiscalite/formateursInternes/bordforminttnd/bordforminttnd.component';
import { BordjetpresdeviseComponent } from './agent-bo/boBordereau/fiscalite/jetonPresence/bordjetpresdevise/bordjetpresdevise.component';
import { BordjetprestndComponent } from './agent-bo/boBordereau/fiscalite/jetonPresence/bordjetprestnd/bordjetprestnd.component';
import { BordpitdevieComponent } from './agent-bo/boBordereau/fiscalite/paiementImpotTaxes/bordpitdevie/bordpitdevie.component';
import { BordpittndComponent } from './agent-bo/boBordereau/fiscalite/paiementImpotTaxes/bordpittnd/bordpittnd.component';
import { BordretsaldeviseComponent } from './agent-bo/boBordereau/fiscalite/retenueSurSalaire/bordretsaldevise/bordretsaldevise.component';
import { BordretsaltndComponent } from './agent-bo/boBordereau/fiscalite/retenueSurSalaire/bordretsaltnd/bordretsaltnd.component';
import { FondRoulementComponent } from './agent-bo/boBordereau/fond-roulement/fond-roulement.component';
import { RemboursementComponent } from './agent-bo/boBordereau/remboursement/remboursement.component';
import { AdminsotdeviseComponent } from './Admin/AdminFactures/facture3wm/admin3wmsotetel/adminsotdevise/adminsotdevise.component';
import { AdminsottndComponent } from './Admin/AdminFactures/facture3wm/admin3wmsotetel/adminsottnd/adminsottnd.component';
import { AdminancedeviseComponent } from './Admin/AdminFactures/facture3wm/admin3wmance/adminancedevise/adminancedevise.component';
import { AdminancetndComponent } from './Admin/AdminFactures/facture3wm/admin3wmance/adminancetnd/adminancetnd.component';
import { AdmincertdeviseComponent } from './Admin/AdminFactures/facture3wm/admin3wmcert/admincertdevise/admincertdevise.component';
import { AdmincerttndComponent } from './Admin/AdminFactures/facture3wm/admin3wmcert/admincerttnd/admincerttnd.component';
import { AdminlcdeviseComponent } from './Admin/AdminFactures/facture3wm/admin3wmlc/adminlcdevise/adminlcdevise.component';
import { AdminlctndComponent } from './Admin/AdminFactures/facture3wm/admin3wmlc/adminlctnd/adminlctnd.component';
import { AdminstegdeviseComponent } from './Admin/AdminFactures/facture3wm/admin3wmsteg/adminstegdevise/adminstegdevise.component';
import { AdminstegtndComponent } from './Admin/AdminFactures/facture3wm/admin3wmsteg/adminstegtnd/adminstegtnd.component';
import { AdminchlocdeviseComponent } from './Admin/AdminFactures/facture3wm/chargeLocative/adminchlocdevise/adminchlocdevise.component';
import { AdminchloctndComponent } from './Admin/AdminFactures/facture3wm/chargeLocative/adminchloctnd/adminchloctnd.component';
import { AdminrisdeviseComponent } from './Admin/AdminFactures/facture3wm/ristourne/adminrisdevise/adminrisdevise.component';
import { AdminristndComponent } from './Admin/AdminFactures/facture3wm/ristourne/adminristnd/adminristnd.component';
import { AdmindouanedeviseComponent } from './Admin/AdminFactures/facture3wm/douane/admindouanedevise/admindouanedevise.component';
import { AdmindouanetndComponent } from './Admin/AdminFactures/facture3wm/douane/admindouanetnd/admindouanetnd.component';
import { AdminoacadeviseComponent } from './Admin/AdminFactures/facture3wm/oaca/adminoacadevise/adminoacadevise.component';
import { AdminoacatndComponent } from './Admin/AdminFactures/facture3wm/oaca/adminoacatnd/adminoacatnd.component';
import { AdminfisclocdeviseComponent } from './Admin/AdminFactures/facture-fisc/fiscalitéLocale/adminfisclocdevise/adminfisclocdevise.component';
import { AdminfiscloctndComponent } from './Admin/AdminFactures/facture-fisc/fiscalitéLocale/adminfiscloctnd/adminfiscloctnd.component';
import { AdminformintdeviseComponent } from './Admin/AdminFactures/facture-fisc/formateursInternes/adminformintdevise/adminformintdevise.component';
import { AdminforminttndComponent } from './Admin/AdminFactures/facture-fisc/formateursInternes/adminforminttnd/adminforminttnd.component';
import { AdminjetpresdeviceComponent } from './Admin/AdminFactures/facture-fisc/jetonPresence/adminjetpresdevice/adminjetpresdevice.component';
import { AdminjetprestndComponent } from './Admin/AdminFactures/facture-fisc/jetonPresence/adminjetprestnd/adminjetprestnd.component';
import { AdminpeadeviseComponent } from './Admin/AdminFactures/facture-fisc/paieEtAutres/adminpeadevise/adminpeadevise.component';
import { AdminpeatndComponent } from './Admin/AdminFactures/facture-fisc/paieEtAutres/adminpeatnd/adminpeatnd.component';
import { AdminpitdeviseComponent } from './Admin/AdminFactures/facture-fisc/paiementImpotEtTaxes/adminpitdevise/adminpitdevise.component';
import { AdminpittndComponent } from './Admin/AdminFactures/facture-fisc/paiementImpotEtTaxes/adminpittnd/adminpittnd.component';
import { AdminretsaldeviseComponent } from './Admin/AdminFactures/facture-fisc/paiementImpotEtTaxes/retenueSurSalaire/adminretsaldevise/adminretsaldevise.component';
import { AdminretsaltndComponent } from './Admin/AdminFactures/facture-fisc/paiementImpotEtTaxes/retenueSurSalaire/adminretsaltnd/adminretsaltnd.component';

import { FondroulementComponent } from './Admin/AdminFactures/fondroulement/fondroulement.component';
import { BobordancedeviseComponent } from './agent-bo/boBordereau/bo-b3wm/bordance/bobordancedevise/bobordancedevise.component';
import { BobordcertdeviseComponent } from './agent-bo/boBordereau/bo-b3wm/bordcert/bobordcertdevise/bobordcertdevise.component';
import { BobordlcdeviseComponent } from './agent-bo/boBordereau/bo-b3wm/bordlc/bobordlcdevise/bobordlcdevise.component';
import { BobordsotdeviseComponent } from './agent-bo/boBordereau/bo-b3wm/bordsotetel/bobordsotdevise/bobordsotdevise.component';
import { BobordstegdeviseComponent } from './agent-bo/boBordereau/bo-b3wm/bordsteg/bobordstegdevise/bobordstegdevise.component';
import { BobordventdirdeviseComponent } from './agent-bo/boBordereau/bo-b3wm/ventdir/bobordventdirdevise/bobordventdirdevise.component';
import { BordfisclocdeviseComponent } from './agent-bo/boBordereau/fiscalite/bordfisclocdevise/bordfisclocdevise.component'
import { BobordpeadeviseComponent } from './agent-bo/boBordereau/fiscalite/paiementEtAutres/bobordpitdevise/bobordpitdevise.component';
import { BobordpeatndComponent } from './agent-bo/boBordereau/fiscalite/paiementEtAutres/bobordpittnd/bobordpittnd.component';
import { BordfindeviseComponent } from './agent-bo/boBordereau/financement/bordfindevise/bordfindevise.component';
import { BordfintndComponent } from './agent-bo/boBordereau/financement/bordfintnd/bordfintnd.component';
import { BordopdeviseComponent } from './agent-bo/boBordereau/operateur/bordopdevise/bordopdevise.component';
import { BordrembdeviseComponent } from './agent-bo/boBordereau/remboursement/bordrembdevise/bordrembdevise.component'
import { BordfddeviseComponent } from './agent-bo/boBordereau/fond-roulement/bordfddevise/bordfddevise.component';
import { AdminfddeviseComponent } from './Admin/AdminFactures/fondroulement/adminfddevise/adminfddevise.component';

import { AdminbordancetndComponent } from './Admin/Adminbordereau/adminbord3wm/adminbordance/adminbordancetnd/adminbordancetnd.component';
import { AdminbordancedeviseComponent } from './Admin/Adminbordereau/adminbord3wm/adminbordance/adminbordancedevise/adminbordancedevise.component';
import { AdminbordcertdeviseComponent } from './Admin/Adminbordereau/adminbord3wm/adminbordcert/adminbordcertdevise/adminbordcertdevise.component';
import { AdminbordcerttndComponent } from './Admin/Adminbordereau/adminbord3wm/adminbordcert/adminbordcerttnd/adminbordcerttnd.component';
import { AdminbordsotdeviseComponent } from './Admin/Adminbordereau/adminbord3wm/adminbordsotetel/adminbordsotdevise/adminbordsotdevise.component';
import { AdminbordsottndComponent } from './Admin/Adminbordereau/adminbord3wm/adminbordsotetel/adminbordsottnd/adminbordsottnd.component';
import { AdminbordstegtndComponent } from './Admin/Adminbordereau/adminbord3wm/adminbordsteg/adminbordstegtnd/adminbordstegtnd.component';
import { AdminbordstegdeviseComponent } from './Admin/Adminbordereau/adminbord3wm/adminbordsteg/adminbordstegdevise/adminbordstegdevise.component';
import { AdminbordventtndComponent } from './Admin/Adminbordereau/adminbord3wm/adminbordventdir/adminbordventtnd/adminbordventtnd.component';
import { AdminbordventdeviseComponent } from './Admin/Adminbordereau/adminbord3wm/adminbordventdir/adminbordventdevise/adminbordventdevise.component';
import { AdminbordchlocdeviseComponent } from './Admin/Adminbordereau/adminbord3wm/adminChargeLocative/adminbordchlocdevise/adminbordchlocdevise.component';
import { AdminbordchloctndComponent } from './Admin/Adminbordereau/adminbord3wm/adminChargeLocative/adminbordchloctnd/adminbordchloctnd.component';
import { AdminborddouanetndComponent } from './Admin/Adminbordereau/adminbord3wm/adminDouane/adminborddouanetnd/adminborddouanetnd.component';
import { AdminborddouanedeviseComponent } from './Admin/Adminbordereau/adminbord3wm/adminDouane/adminborddouanedevise/adminborddouanedevise.component';
import { AdminOacaComponent } from './Admin/Adminbordereau/adminbord3wm/adminOaca/admin-oaca/admin-oaca.component';
import { AdminbordoacadeviseComponent } from './Admin/Adminbordereau/adminbord3wm/adminOaca/adminbordoacadevise/adminbordoacadevise.component';
import { AdminbordristdeviseComponent } from './Admin/Adminbordereau/adminbord3wm/adminRistourne/adminbordristdevise/adminbordristdevise.component';
import { AdminbordristtndComponent } from './Admin/Adminbordereau/adminbord3wm/adminRistourne/adminbordristtnd/adminbordristtnd.component';
import { AdminbordcmdtndComponent } from './Admin/Adminbordereau/adminbordcomdist/adminbordcmdtnd/adminbordcmdtnd.component';
import { AdminbordcmddeviseComponent } from './Admin/Adminbordereau/adminbordcomdist/adminbordcmddevise/adminbordcmddevise.component';
import { AdminbordfiscdeviseComponent } from './Admin/Adminbordereau/adminbordfisc/adminbordfisc/adminbordfiscdevise/adminbordfiscdevise.component';
import { AdminbordfisctndComponent } from './Admin/Adminbordereau/adminbordfisc/adminbordfisc/adminbordfisctnd/adminbordfisctnd.component';
import { AdminbordchsocdeviseComponent } from './Admin/Adminbordereau/adminbordfisc/chargeSociale/adminbordchsocdevise/adminbordchsocdevise.component';
import { AdminbordchsoctndComponent } from './Admin/Adminbordereau/adminbordfisc/chargeSociale/adminbordchsoctnd/adminbordchsoctnd.component';
import { AdminbordforminttndComponent } from './Admin/Adminbordereau/adminbordfisc/formateursInternes/adminbordforminttnd/adminbordforminttnd.component';
import { AdminbordformintdeviseComponent } from './Admin/Adminbordereau/adminbordfisc/formateursInternes/adminbordformintdevise/adminbordformintdevise.component';
import { AdminbordjetpresdeviseComponent } from './Admin/Adminbordereau/adminbordfisc/jetonPresence/adminbordjetpresdevise/adminbordjetpresdevise.component';
import { AdminbordjetprestndComponent } from './Admin/Adminbordereau/adminbordfisc/jetonPresence/adminbordjetprestnd/adminbordjetprestnd.component';
import { AdminbordpeatndComponent } from './Admin/Adminbordereau/adminbordfisc/paiementEtAutres/adminbordpeatnd/adminbordpeatnd.component';
import { AdminbordpeadeviseComponent } from './Admin/Adminbordereau/adminbordfisc/paiementEtAutres/adminbordpeadevise/adminbordpeadevise.component';
import { AdminbordpittndComponent } from './Admin/Adminbordereau/adminbordfisc/paiementImpotTaxes/adminbordpittnd/adminbordpittnd.component';
import { AdminbordpitdeviseComponent } from './Admin/Adminbordereau/adminbordfisc/paiementImpotTaxes/adminbordpitdevise/adminbordpitdevise.component';
import { AdminbordretsaldeviseComponent } from './Admin/Adminbordereau/adminbordfisc/retenueSurSalaire/adminbordretsaldevise/adminbordretsaldevise.component';
import { AdminbordretsaltndComponent } from './Admin/Adminbordereau/adminbordfisc/retenueSurSalaire/adminbordretsaldevise/adminbordretsaltnd/adminbordretsaltnd.component';
import { AdminbordfdtndComponent } from './Admin/Adminbordereau/adminbordfondroulement/adminbordfdtnd/adminbordfdtnd.component';
import { AdminbordfddeviseComponent } from './Admin/Adminbordereau/adminbordfondroulement/adminbordfddevise/adminbordfddevise.component';
import { AdminbordopdeviseComponent } from './Admin/Adminbordereau/adminbordoperateur/adminbordopdevise/adminbordopdevise.component';
import { AdminbordoptndComponent } from './Admin/Adminbordereau/adminbordoperateur/adminbordoptnd/adminbordoptnd.component';
import { AdminbordremdeviseComponent } from './Admin/Adminbordereau/adminbordremboursement/adminbordremdevise/adminbordremdevise.component';
import { AdminbordremtndComponent } from './Admin/Adminbordereau/adminbordremboursement/adminbordremtnd/adminbordremtnd.component';
import { AdminbordlcdeviseComponent } from './Admin/Adminbordereau/lettreCredit/adminbordlcdevise/adminbordlcdevise.component';
import { AdminbordlctndComponent } from './Admin/Adminbordereau/lettreCredit/adminbordlctnd/adminbordlctnd.component';
import { AdminbordfintndComponent } from './Admin/Adminbordereau/adminFinancement/adminbordfintnd/adminbordfintnd.component';
import { AdminbordfindeviseComponent } from './Admin/Adminbordereau/adminFinancement/adminbordfindevise/adminbordfindevise.component'
import { AdminchsocdeviseComponent } from './Admin/AdminFactures/facture-fisc/chargeSociale/adminchlocdevise/adminchlocdevise.component'
import { AdminchsoctndComponent } from './Admin/AdminFactures/facture-fisc/chargeSociale/adminchloctnd/adminchloctnd.component';
import { AdminfactventtndComponent } from './Admin/AdminFactures/ventilationDirecte/adminfactventtnd/adminfactventtnd.component';
import { AdminfactventdeviseComponent } from './Admin/AdminFactures/ventilationDirecte/adminfactventdevise/adminfactventdevise.component'
import { AdminfactcomddeviseComponent } from './Admin/AdminFactures/facture-comdist/adminfactcomddevise/adminfactcomddevise.component';
import { AdminfactfindeviseComponent } from './Admin/AdminFactures/facture-financement/adminfactfindevise/adminfactfindevise.component';
import { AdminfactlcdeviseComponent } from './Admin/AdminFactures/facture-lettre-credit/adminfactlcdevise/adminfactlcdevise.component';
import { AdminfactopdeviseComponent } from './Admin/AdminFactures/facture-operateur/adminfactopdevise/adminfactopdevise.component';
import { AdminfactrembdeviseComponent } from './Admin/AdminFactures/factureremb/adminfactrembdevise/adminfactrembdevise.component'
import { BobordcmddeviseComponent } from './agent-bo/boBordereau/comdist/bobordcmddevise/bobordcmddevise.component';

import { CmptchlocdeviseComponent } from './agentcmpt/cmp-fact-3wm/chargeLocative/cmptchlocdevise/cmptchlocdevise.component';
import { CmptchloctndComponent } from './agentcmpt/cmp-fact-3wm/chargeLocative/cmptchloctnd/cmptchloctnd.component';
import { CmptdouanedeviseComponent } from './agentcmpt/cmp-fact-3wm/cmptdouane/cmptdouanedevise/cmptdouanedevise.component';
import { CmptdouanetndComponent } from './agentcmpt/cmp-fact-3wm/cmptdouane/cmptdouanetnd/cmptdouanetnd.component';
import { CmptoacadeviseComponent } from './agentcmpt/cmp-fact-3wm/cmptoaca/cmptoacadevise/cmptoacadevise.component';
import { CmptoacatndComponent } from './agentcmpt/cmp-fact-3wm/cmptoaca/cmptoacatnd/cmptoacatnd.component';
import { CmptrisdeviseComponent } from './agentcmpt/cmp-fact-3wm/cmptristourne/cmptrisdevise/cmptrisdevise.component';
import { CmptristndComponent } from './agentcmpt/cmp-fact-3wm/cmptristourne/cmptristnd/cmptristnd.component';
import { CmptchsocdeviseComponent } from './agentcmpt/cmp-fact-fisc/cmptChargeSociale/cmptchsocdevise/cmptchsocdevise.component';
import { CmptchsoctndComponent } from './agentcmpt/cmp-fact-fisc/cmptChargeSociale/cmptchsoctnd/cmptchsoctnd.component';
import { CmptfisclocdeviseComponent } from './agentcmpt/cmp-fact-fisc/cmptfiscalitéLocale/cmptfisclocdevise/cmptfisclocdevise.component';
import { CmptfiscloctndComponent } from './agentcmpt/cmp-fact-fisc/cmptfiscalitéLocale/cmptfiscloctnd/cmptfiscloctnd.component';
import { CmptforminttndComponent } from './agentcmpt/cmp-fact-fisc/formateurInternes/cmptforminttnd/cmptforminttnd.component';
import { CmptformintdeviseComponent } from './agentcmpt/cmp-fact-fisc/formateurInternes/cmptformintdevise/cmptformintdevise.component';
import { CmptjetpresdeviseComponent } from './agentcmpt/cmp-fact-fisc/jetonPresence/cmptjetpresdevise/cmptjetpresdevise.component';
import { CmptjetprestndComponent } from './agentcmpt/cmp-fact-fisc/jetonPresence/cmptjetprestnd/cmptjetprestnd.component';
import { CmppeadeviseComponent } from './agentcmpt/cmp-fact-fisc/paieEtAutres/cmppeadevise/cmppeadevise.component';
import { CmppeatndComponent } from './agentcmpt/cmp-fact-fisc/paieEtAutres/cmppeatnd/cmppeatnd.component';
import { CmptpitdeviseComponent } from './agentcmpt/cmp-fact-fisc/paiementImpotTaxes/cmptpitdevise/cmptpitdevise.component';
import { CmptpittndComponent } from './agentcmpt/cmp-fact-fisc/paiementImpotTaxes/cmptpittnd/cmptpittnd.component';
import { CmptretsaldeviseComponent } from './agentcmpt/cmp-fact-fisc/retenueSurSalaire/cmptretsaldevise/cmptretsaldevise.component';
import { CmptretsaltndComponent } from './agentcmpt/cmp-fact-fisc/retenueSurSalaire/cmptretsaltnd/cmptretsaltnd.component';
import { BofactcrdeviseComponent } from './agent-bo/boFacture/bo-fact-comdist/bofactcrdevise/bofactcrdevise.component';
import { TresochsocdeviseComponent } from './agent-treso/tresofisc/chargeSociale/tresochsocdevise/tresochsocdevise.component';
import { TresochsoctndComponent } from './agent-treso/tresofisc/chargeSociale/tresochsoctnd/tresochsoctnd.component';
import { TresofisclocdeviseComponent } from './agent-treso/tresofisc/fiscalitéLocale/tresofisclocdevise/tresofisclocdevise.component';
import { TresofiscloctndComponent } from './agent-treso/tresofisc/fiscalitéLocale/tresofiscloctnd/tresofiscloctnd.component';
import { TresoformintdeviseComponent } from './agent-treso/tresofisc/formateursInternes/tresoformintdevise/tresoformintdevise.component';
import { TresoforminttndComponent } from './agent-treso/tresofisc/formateursInternes/tresoforminttnd/tresoforminttnd.component';
import { TresojetpresdeviseComponent } from './agent-treso/tresofisc/jetonPresence/tresojetpresdevise/tresojetpresdevise.component';
import { TresojetprestndComponent } from './agent-treso/tresofisc/jetonPresence/tresojetprestnd/tresojetprestnd.component';
import { TresopeadeviseComponent } from './agent-treso/tresofisc/paieEtAutres/tresopeadevise/tresopeadevise.component';
import { TresopeatndComponent } from './agent-treso/tresofisc/paieEtAutres/tresopeatnd/tresopeatnd.component';
import { TresopitdeviseComponent } from './agent-treso/tresofisc/paiementImpotsEtTaxes/tresopitdevise/tresopitdevise.component';
import { TresopittndComponent } from './agent-treso/tresofisc/paiementImpotsEtTaxes/tresopittnd/tresopittnd.component';
import { TresoretsaldeviseComponent } from './agent-treso/tresofisc/retenueSurSalaire/tresoretsaldevise/tresoretsaldevise.component';
import { TresoretsaltndComponent } from './agent-treso/tresofisc/retenueSurSalaire/tresoretsaltnd/tresoretsaltnd.component';
import { TresoancedeviseComponent } from './agent-treso/treso3wm/ance/tresoancedevise/tresoancedevise.component';
import { TresoancetndComponent } from './agent-treso/treso3wm/ance/tresoancetnd/tresoancetnd.component';
import { TresocertdeviseComponent } from './agent-treso/treso3wm/cert/tresocertdevise/tresocertdevise.component';
import { TresocerttndComponent } from './agent-treso/treso3wm/cert/tresocerttnd/tresocerttnd.component';
import { TresochloctndComponent } from './agent-treso/treso3wm/chargeLocative/tresochloctnd/tresochloctnd.component';
import { TresochlocdeviseComponent } from './agent-treso/treso3wm/chargeLocative/tresochlocdevise/tresochlocdevise.component';
import { TresodouanedeviseComponent } from './agent-treso/treso3wm/douane/tresodouanedevise/tresodouanedevise.component';
import { TresodouanetndComponent } from './agent-treso/treso3wm/douane/tresodouanetnd/tresodouanetnd.component';
import { TresooacadeviseComponent } from './agent-treso/treso3wm/oaca/tresooacadevise/tresooacadevise.component';
import { TresooacatndComponent } from './agent-treso/treso3wm/oaca/tresooacatnd/tresooacatnd.component';
import { TresoristdeviseComponent } from './agent-treso/treso3wm/ristourne/tresoristdevise/tresoristdevise.component';
import { TresoristtndComponent } from './agent-treso/treso3wm/ristourne/tresoristtnd/tresoristtnd.component';
import { TresosotdeviseComponent } from './agent-treso/treso3wm/sotetel/tresosotdevise/tresosotdevise.component';
import { TresosottndComponent } from './agent-treso/treso3wm/sotetel/tresosottnd/tresosottnd.component';
import { TresostegdeviseComponent } from './agent-treso/treso3wm/steg/tresostegdevise/tresostegdevise.component';
import { TresostegtndComponent } from './agent-treso/treso3wm/steg/tresostegtnd/tresostegtnd.component';
import { TresocomdistdeviseComponent } from './agent-treso/tresocomdist/tresocomdistdevise/tresocomdistdevise.component';
import { TresocomdisttndComponent } from './agent-treso/tresocomdist/tresocomdisttnd/tresocomdisttnd.component';
import { TresofddeviseComponent } from './agent-treso/tresofd/tresofddevise/tresofddevise.component';
import { TresofdtndComponent } from './agent-treso/tresofd/tresofdtnd/tresofdtnd.component';
import { TresofindeviseComponent } from './agent-treso/tresofin/tresofindevise/tresofindevise.component';
import { TresofintndComponent } from './agent-treso/tresofin/tresofintnd/tresofintnd.component';
import { TresolcdeviseComponent } from './agent-treso/tresolc/tresolcdevise/tresolcdevise.component';
import { TresolctndComponent } from './agent-treso/tresolc/tresolctnd/tresolctnd.component';
import { TresooperdeviseComponent } from './agent-treso/tresooper/tresooperdevise/tresooperdevise.component';
import { TresoopertndComponent } from './agent-treso/tresooper/tresoopertnd/tresoopertnd.component';
import { TresorembdeviseComponent } from './agent-treso/tresoremb/tresorembdevise/tresorembdevise.component';
import { TresorembtndComponent } from './agent-treso/tresoremb/tresorembtnd/tresorembtnd.component';
import { TresoventdirdeviseComponent } from './agent-treso/tresoventdir/tresoventdirdevise/tresoventdirdevise.component';
import { TresoventdirtndComponent } from './agent-treso/tresoventdir/tresoventdirtnd/tresoventdirtnd.component';
import { TresoComponent } from './agent-treso/treso/treso.component'

 
const appRoute : Routes = [
  {path:'Tresoopertnd', component:TresoopertndComponent},
  {path:'Tresolcdevise', component:TresolcdeviseComponent},
  {path:'Tresolctnd', component:TresolctndComponent},
  {path:'Tresooperdevise', component:TresooperdeviseComponent},
  {path:'Tresorembdevise', component:TresorembdeviseComponent},
  {path:'Tresorembtnd', component:TresorembtndComponent},
  {path:'Tresoventdirdevise', component:TresoventdirdeviseComponent},
  {path:'Tresoventdirtnd', component:TresoventdirtndComponent},
  {path:'Treso', component:TresoComponent},

  {path:'Tresooacatnd', component:TresooacatndComponent},
  {path:'Tresoancedevise', component:TresoancedeviseComponent},
  {path:'Tresoristdevise', component:TresoristdeviseComponent},
  {path:'Tresoristtnd', component:TresoristtndComponent},
  {path:'Tresosotdevise', component:TresosotdeviseComponent},
  {path:'Tresosottnd', component:TresosottndComponent},
  {path:'Tresostegdevise', component:TresostegdeviseComponent},
  {path:'Tresostegtnd', component:TresostegtndComponent},
  {path:'Tresocomdistdevise', component:TresocomdistdeviseComponent},
  {path:'Tresocomdisttnd', component:TresocomdisttndComponent},
  {path:'Tresofddevise', component:TresofddeviseComponent},
  {path:'Tresofdtnd', component:TresofdtndComponent},
  {path:'Tresofindevise', component:TresofindeviseComponent},
  {path:'Tresofintnd', component:TresofintndComponent},

  {path:'Tresoancetnd', component:TresoancetndComponent},
  {path:'Tresocertdevise', component:TresocertdeviseComponent},
  {path:'Tresocerttnd', component:TresocerttndComponent},
  {path:'Tresochloctnd', component:TresochloctndComponent},
  {path:'Tresochlocdevise', component:TresochlocdeviseComponent},
  {path:'Tresodouanedevise', component:TresodouanedeviseComponent},
  {path:'Tresodouanetnd', component:TresodouanetndComponent},
  {path:'Tresooacadevise', component:TresooacadeviseComponent},

  {path:'Tresochsocdevise', component:TresochsocdeviseComponent},
  {path:'Tresochsoctnd', component:TresochsoctndComponent},
  {path:'Tresofisclocdevise', component:TresofisclocdeviseComponent},
  {path:'Tresofiscloctnd', component:TresofiscloctndComponent},
  {path:'Tresoformintdevise', component:TresoformintdeviseComponent},
  {path:'Tresoforminttnd', component:TresoforminttndComponent},
  {path:'Tresojetpresdevise', component:TresojetpresdeviseComponent},
  {path:'Tresojetprestnd', component:TresojetprestndComponent},
  {path:'Tresopeadevise', component:TresopeadeviseComponent},
  {path:'Tresopeatnd', component:TresopeatndComponent},
  {path:'Tresopitdevise', component:TresopitdeviseComponent},
  {path:'Tresopittnd', component:TresopittndComponent},
  {path:'Tresoretsaldevise', component:TresoretsaldeviseComponent},
  {path:'Tresoretsaltnd', component:TresoretsaltndComponent},

  {path:'FactureComdist', component:FactureComdistComponent},
  {path:'Bofactcrdevise', component:BofactcrdeviseComponent},
  {path:'boBordComdistTnd', component:boBordComdistTndComponent},
  {path:'Cmptchlocdevise', component:CmptchlocdeviseComponent},
  {path:'Cmptchloctnd', component:CmptchloctndComponent},
  {path:'Cmptdouanedevise', component:CmptdouanedeviseComponent},
  {path:'Cmptdouanetnd', component:CmptdouanetndComponent},
  {path:'Cmptoacadevise', component:CmptoacadeviseComponent},
  {path:'Cmptoacatnd', component:CmptoacatndComponent},
  {path:'Cmptrisdevise', component:CmptrisdeviseComponent},
  {path:'Cmptristnd', component:CmptristndComponent},
  {path:'Cmptchsocdevise', component:CmptchsocdeviseComponent},
  {path:'Cmptchsoctnd', component:CmptchsoctndComponent},
  {path:'Cmptfisclocdevise', component:CmptfisclocdeviseComponent},
  {path:'Cmptfiscloctnd', component:CmptfiscloctndComponent},
  {path:'Cmptforminttnd', component:CmptforminttndComponent},
  {path:'Cmptformintdevise', component:CmptformintdeviseComponent},
  {path:'Cmptjetpresdevise', component:CmptjetpresdeviseComponent},
  {path:'Cmptjetprestnd', component:CmptjetprestndComponent},
  {path:'Cmppeadevise', component:CmppeadeviseComponent},
  {path:'Cmppeatnd', component:CmppeatndComponent},
  {path:'Cmptpitdevise', component:CmptpitdeviseComponent},
  {path:'Cmptpittnd', component:CmptpittndComponent},
  {path:'Cmptretsaldevise', component:CmptretsaldeviseComponent},
  {path:'Cmptretsaltnd', component:CmptretsaltndComponent},

  {path:'Bobordcmddevise', component:BobordcmddeviseComponent},
  {path:'ComdistComponent', component:DevisecomdisrjcComponent},
  {path:'Devisecomdisrjc', component:DevisecomdisrjcComponent},
  {path:'remenvTnd', component:remenvTndComponent},
  {path:'Adminfddevise', component:AdminfddeviseComponent},
  {path:'Adminfactcomddevise', component:AdminfactcomddeviseComponent},
  {path:'Adminfactfindevise', component:AdminfactfindeviseComponent},
  {path:'Adminfactlcdevise', component:AdminfactlcdeviseComponent},
  {path:'Adminfactopdevise', component:AdminfactopdeviseComponent},
  {path:'Adminfactrembdevise', component:AdminfactventtndComponent},
  {path:'Adminfactventtnd', component:AdminfactventtndComponent},
  {path:'Adminfactventdevise', component:AdminfactventdeviseComponent},
  {path:'Adminchsocdevise', component:AdminchsocdeviseComponent},
  {path:'Adminchsoctnd', component:AdminchsoctndComponent},
  {path:'Adminbordfindevise', component:AdminbordfindeviseComponent},
  {path:'Adminbordfintnd', component:AdminbordfintndComponent},
  {path:'Adminbordlcdevise', component:AdminbordlcdeviseComponent},
  {path:'Adminbordlctnd', component:AdminbordlctndComponent},
  {path:'Adminbordremtnd', component:AdminbordremtndComponent},
  {path:'Adminbordpitdevise', component:AdminbordpitdeviseComponent},
  {path:'Adminbordretsaldevise', component:AdminbordretsaldeviseComponent},
  {path:'Adminbordretsaltnd', component:AdminbordretsaltndComponent},
  {path:'Adminbordfdtnd', component:AdminbordfdtndComponent},
  {path:'Adminbordfddevise', component:AdminbordfddeviseComponent},
  {path:'Adminbordopdevise', component:AdminbordopdeviseComponent},
  {path:'Adminbordoptnd', component:AdminbordoptndComponent},
  {path:'Adminbordremdevise', component:AdminbordremdeviseComponent},
  {path:'Adminbordancetnd', component:AdminbordancetndComponent},
  {path:'Adminbordancedevise', component:AdminbordancedeviseComponent},
  {path:'Adminbordcertdevise', component:AdminbordcertdeviseComponent},
  {path:'Adminbordcerttnd', component:AdminbordcerttndComponent},
  {path:'Adminbordsotdevise', component:AdminbordsotdeviseComponent},
  {path:'Adminbordsottnd', component:AdminbordsottndComponent},
  {path:'Adminbordstegtnd', component:AdminbordstegtndComponent},
  {path:'Adminbordstegdevise', component:AdminbordstegdeviseComponent},
  {path:'Adminbordventtnd', component:AdminbordventtndComponent},
  {path:'Adminbordventdevise', component:AdminbordventdeviseComponent},
  {path:'Adminbordchlocdevise', component:AdminbordchlocdeviseComponent},
  {path:'Adminbordchloctnd', component:AdminbordchloctndComponent},
  {path:'Adminborddouanetnd', component:AdminborddouanetndComponent},
  {path:'Adminborddouanedevise', component:AdminborddouanedeviseComponent},
  {path:'AdminOaca', component:AdminOacaComponent},
  {path:'Adminbordoacadevise', component:AdminbordoacadeviseComponent},
  {path:'Adminbordristdevise', component:AdminbordristdeviseComponent},
  {path:'Adminbordristtnd', component:AdminbordristtndComponent},
  {path:'Adminbordcmdtnd', component:AdminbordcmdtndComponent},
  {path:'Adminbordcmddevise', component:AdminbordcmddeviseComponent},
  {path:'Adminbordfiscdevise', component:AdminbordfiscdeviseComponent},
  {path:'Adminbordfisctnd', component:AdminbordfisctndComponent},
  {path:'Adminbordchsocdevise', component:AdminbordchsocdeviseComponent},
  {path:'Adminbordchsoctnd', component:AdminbordchsoctndComponent},
  {path:'Adminbordforminttnd', component:AdminbordforminttndComponent},
  {path:'Adminbordformintdevise', component:AdminbordformintdeviseComponent},
  {path:'Adminbordjetpresdevise', component:AdminbordjetpresdeviseComponent},
  {path:'Adminbordjetprestnd', component:AdminbordjetprestndComponent},
  {path:'Adminbordpeatnd', component:AdminbordpeatndComponent},
  {path:'Adminbordpeadevise', component:AdminbordpeadeviseComponent},
  {path:'Adminbordpittnd', component:AdminbordpittndComponent},

  {path:'Bordfddevise', component:BordfddeviseComponent},
  {path:'Bordopdevise', component:BordopdeviseComponent},
  {path:'Bordrembdevise', component:BordrembdeviseComponent},
  {path:'OperateurComponent', component:OperateurComponent},
  {path:'Bordfindevise', component:BordfindeviseComponent},
  {path:'Bordfintnd', component:BordfintndComponent},
  {path:'Bobordpeadevise', component:BobordpeadeviseComponent},
  {path:'Bobordpittnd', component:BobordpeatndComponent},
  {path:'Bordfisclocdevise', component:BordfisclocdeviseComponent},
  {path:'Fiscalitetnd', component:FiscaliteComponent},
  {path:'Bobordventdirdevise', component:BobordventdirdeviseComponent},
  {path:'Bobordancedevise', component:BobordancedeviseComponent},
  {path:'Bobordcertdevise', component:BobordcertdeviseComponent},
  {path:'Bobordlcdevise', component:BobordlcdeviseComponent},
  {path:'Bobordsotdevise', component:BobordsotdeviseComponent},
  {path:'Bobordstegdevise', component:BobordstegdeviseComponent},

  {path:'Adminsotdevise', component:AdminsotdeviseComponent},
  {path:'Adminsottnd', component:AdminsottndComponent},
  {path:'Adminancedevise', component:AdminancedeviseComponent},
  {path:'Adminancetnd', component:AdminancetndComponent},
  {path:'Admincertdevise', component:AdmincertdeviseComponent},
  {path:'Admincerttnd', component:AdmincerttndComponent},
  {path:'Adminlcdevise', component:AdminlcdeviseComponent},
  {path:'Adminlctnd', component:AdminlctndComponent},
  {path:'Adminstegdevise', component:AdminstegdeviseComponent},
  {path:'Adminstegtnd', component:AdminstegtndComponent},
  {path:'Adminchlocdevise', component:AdminchlocdeviseComponent},
  {path:'Adminchloctnd', component:AdminchloctndComponent},
  {path:'Adminrisdevise', component:AdminrisdeviseComponent},
  {path:'Adminristnd', component:AdminristndComponent},
  {path:'Admindouanedevise', component:AdmindouanedeviseComponent},
  {path:'Admindouanetnd', component:AdmindouanetndComponent},
  {path:'Adminoacadevise', component:AdminoacadeviseComponent},
  {path:'Adminoacatnd', component:AdminoacatndComponent},
  {path:'Adminfisclocdevise', component:AdminfisclocdeviseComponent},
  {path:'Adminfiscloctnd', component:AdminfiscloctndComponent},
  {path:'Adminformintdevise', component:AdminformintdeviseComponent},
  {path:'Adminforminttnd', component:AdminforminttndComponent},
  {path:'Adminjetpresdevice', component:AdminjetpresdeviceComponent},
  {path:'Adminjetprestnd', component:AdminjetprestndComponent},
  {path:'Adminpeadevise', component:AdminpeadeviseComponent},
  {path:'Adminpeatnd', component:AdminpeatndComponent},
  {path:'Adminpitdevise', component:AdminpitdeviseComponent},
  {path:'Adminpittnd', component:AdminpittndComponent},
  {path:'Adminretsaldevise', component:AdminretsaldeviseComponent},
  {path:'Adminretsaltnd', component:AdminretsaltndComponent},
  {path:'Fondroulement', component:FondroulementComponent},
  
  {path:'Bordchlocdevise', component:BordchlocdeviseComponent},
  {path:'Bordchloctnd', component:BordchloctndComponent},
  {path:'Bordristdevise', component:BordristdeviseComponent},
  {path:'Bordristtnd', component:BordristtndComponent},
  {path:'Borddouanedevise', component:BorddouanedeviseComponent},
  {path:'Borddouanetnd', component:BorddouanetndComponent},
  {path:'Bordoacadevise', component:BordoacadeviseComponent},
  {path:'Bordoacatnd', component:BordoacatndComponent},
  {path:'Bordchsocdevise', component:BordchsocdeviseComponent},
  {path:'Bordchsoctnd', component:BordchsoctndComponent},
  {path:'Bordformintdevise', component:BordformintdeviseComponent},
  {path:'Bordforminttnd', component:BordforminttndComponent},
  {path:'Bordjetpresdevise', component:BordjetpresdeviseComponent},
  {path:'Bordjetprestnd', component:BordjetprestndComponent},
  {path:'Bordpitdevie', component:BordpitdevieComponent},
  {path:'Bordpittnd', component:BordpittndComponent},
  {path:'Bordretsaldevise', component:BordretsaldeviseComponent},
  {path:'Bordretsaltnd', component:BordretsaltndComponent},
  {path:'FondRoulement', component:FondRoulementComponent},
  {path:'Remboursement', component:RemboursementComponent},

  {path:'Rejchsocdevise', component:RejchsocdeviseComponent},
  {path:'Rejchsoctnd', component:RejchsoctndComponent},
  {path:'Croacatnd', component:CroacatndComponent},
  {path:'Croacadevise', component:CroacadeviseComponent},
  {path:'Envoacadevise', component:EnvoacadeviseComponent},
  {path:'Envoacatnd', component:EnvoacatndComponent},
  {path:'Rejoacadevise', component:RejoacadeviseComponent},
  {path:'Rejoacatnd', component:RejoacatndComponent},
  {path:'Envfiscloctnd', component:EnvfiscloctndComponent},
  {path:'Envformintdevise', component:EnvformintdeviseComponent},
  {path:'Envforminttnd', component:EnvforminttndComponent},
  {path:'Envjetpresdevise', component:EnvjetpresdeviseComponent},
  {path:'Envjetprestnd', component:EnvjetprestndComponent},
  {path:'Enpeadevise', component:EnpeadeviseComponent},
  {path:'Envpeatnd', component:EnvpeatndComponent},
  {path:'Envpittxtnd', component:EnvpittxtndComponent},
  {path:'Envpittxdevise', component:EnvpittxdeviseComponent},
  {path:'Envretsursaldevise', component:EnvretsursaldeviseComponent},
  {path:'Envretsursaltnd', component:EnvretsursaltndComponent},
  {path:'Rejchlocdevise', component:RejchlocdeviseComponent},
  {path:'Rejchloctnd', component:RejchloctndComponent},
  {path:'Rejristtnd', component:RejristtndComponent},
  {path:'Rejristdevise', component:RejristdeviseComponent},
  {path:'Rejdouanedevise', component:RejdouanedeviseComponent},
  {path:'Rejdouanetnd', component:RejdouanetndComponent},
  {path:'Rejfisclocdevise', component:RejfisclocdeviseComponent},
  {path:'Rejfiscloctnd', component:RejfiscloctndComponent},
  {path:'Rejjetpresdevise', component:RejjetpresdeviseComponent},
  {path:'Rejjetprestnd', component:RejjetprestndComponent},
  {path:'Rejpeadevise', component:RejpeadeviseComponent},
  {path:'Rejpeatnd', component:RejpeatndComponent},
  {path:'Rejpitxdevise', component:RejpitxdeviseComponent},
  {path:'Rejpitxtnd', component:RejpitxtndComponent},
  {path:'Rejretsaldevise', component:RejretsaldeviseComponent},
  {path:'Rejretsaltnd', component:RejretsaltndComponent},
  {path:'Rejformindevise', component:RejformindeviseComponent},
  {path:'Rejformintnd', component:RejformintndComponent},
   
  {path:'Bocrchlocdevise', component:BocrchlocdeviseComponent},
  {path:'Bocrchloctnd', component:BocrchloctndComponent},
  {path:'Crdouanedevise', component:CrdouanedeviseComponent},
  {path:'Crdouanetnd', component:CrdouanetndComponent},
  {path:'Crristournedevise', component:CrristournedeviseComponent},
  {path:'Crristournetnd', component:CrristournetndComponent},
  {path:'Crjtndevise', component:CrjtndeviseComponent},
  {path:'Crjtntnd', component:CrjtntndComponent},
  {path:'Crpitdevise', component:CrpitdeviseComponent},
  {path:'Crpittnd', component:CrpittndComponent},
  {path:'Crretsaldevise', component:CrretsaldeviseComponent},
  {path:'Crretsaltnd', component:CrretsaltndComponent},
  {path:'Crchrsocdevise', component:CrchrsocdeviseComponent},
  {path:'Crchrsoctnd', component:CrchrsoctndComponent},
  {path:'Fisclocdevise', component:FisclocdeviseComponent},
  {path:'Fiscloctnd', component:FiscloctndComponent},
  {path:'Peadevise', component:PeadeviseComponent},
  {path:'Cdpeatnd', component:CdpeatndComponent},
  {path:'Crfrmintdevise', component:CrfrmintdeviseComponent},
  {path:'Crfrminttnd', component:CrfrminttndComponent},
  {path:'Envchlocdevise', component:EnvchlocdeviseComponent},
  {path:'Envchloctnd', component:EnvchloctndComponent},
  {path:'Envristournedevise', component:EnvristournedeviseComponent},
  {path:'Envristournetnd', component:EnvristournetndComponent},
  {path:'Envdouancedevise', component:EnvdouancedeviseComponent},
  {path:'Envdouanetnd', component:EnvdouanetndComponent},
  {path:'Envchsowdevise', component:EnvchsowdeviseComponent},
  {path:'Envchsowtnd', component:EnvchsowtndComponent},

  {path:'Dashboard', component:DashboardComponent},
  {path:'Cmp3wmancedevise', component:Cmp3wmancedeviseComponent},
  {path:'Cmp3wmancetnd', component:Cmp3wmancetndComponent},
  {path:'Cmp3wmcertdevise', component:Cmp3wmcertdeviseComponent},
  {path:'Cmp3wmcerttnd', component:Cmp3wmcerttndComponent},
  {path:'Cmp3wmlcdevise', component:Cmp3wmlcdeviseComponent},
  {path:'Cmp3wmlctnd', component:Cmp3wmlctndComponent},
  {path:'Cmp3wmsotdevise', component:Cmp3wmsotdeviseComponent},
  {path:'Cmp3wmsottnd', component:Cmp3wmsottndComponent},
  {path:'Cmp3wmstegdevise', component:Cmp3wmstegdeviseComponent},
  {path:'Cmp3wmstegtnd', component:Cmp3wmstegtndComponent},
  {path:'Cmpcmddevise', component:CmpcmddeviseComponent},
  {path:'Cmpcmdtnd', component:CmpcmdtndComponent},
  {path:'Cmpfddevise', component:CmpfddeviseComponent},
  {path:'Cmpfdtnd', component:CmpfdtndComponent},
  {path:'Cmpfindevise', component:CmpfindeviseComponent},
  {path:'Cmpfintnd', component:CmpfintndComponent},
  {path:'Cmplcdevise', component:CmplcdeviseComponent},
  {path:'Cmplctnd', component:CmplctndComponent},
  {path:'Cmpopdevise', component:CmpopdeviseComponent},
  {path:'Cmpoptnd', component:CmpoptndComponent},
  {path:'Cmprembdevise', component:CmprembdeviseComponent},
  {path:'Cmprembtnd', component:CmprembtndComponent},
  {path:'Cmpventdevise', component:CmpventdeviseComponent},
  {path:'Cmpventtnd', component:CmpventtndComponent},

  {path:'Rejectedfdtnd', component:RejectedfdtndComponent},
  {path:'Rejectedfddevise', component:RejectedfddeviseComponent},
  {path:'BoFactOper', component:BoFactOperComponent},
  {path:'operrjcDevise', component:operrjcDeviseComponent},
  {path:'BoFactFisc', component:BoFactFinanceComponent},
  {path:'fiscrjcDevise', component:fiscrjcDeviseComponent},
  {path:'Devisefinrjc', component:DevisefinrjcComponent},
  {path:'ventrjcDevise', component:ventrjcDeviseComponent},
  {path:'certdeviseDevise', component:certdeviseDeviseComponent},
  {path:'rjctndBo3wmcert', component:rjctndBo3wmcertComponent},
  {path:'lcrjcDevise', component:lcrjcDeviseComponent},
  {path:'ventBo3wmlc', component:ventBo3wmlcComponent},
  {path:'sotrjcDevise', component:sotrjcDeviseComponent},
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


@NgModule({
  declarations: [
    BordfddeviseComponent,
    FondroulementComponent,
    BobordcmddeviseComponent,
    AdminretsaltndComponent,
    AdminretsaldeviseComponent,
    AdminpittndComponent, 
    AdminpitdeviseComponent,
    AdminpeatndComponent,
    AdminfactfindeviseComponent,
    AdminpeadeviseComponent,
    AdminfactlcdeviseComponent,
    AdminchsocdeviseComponent,
    AdminchsoctndComponent,
    BobordpeadeviseComponent,
    AdminjetprestndComponent,
    AdminjetpresdeviceComponent,
    AdminfactcomddeviseComponent,
    AdminforminttndComponent,
    AdminformintdeviseComponent,
    AdminfiscloctndComponent,
    AdminfisclocdeviseComponent,
    AdminoacatndComponent,
    AdminoacadeviseComponent,
    AdmindouanetndComponent,
    AdmindouanedeviseComponent,
    AdminristndComponent,
    AdminrisdeviseComponent,
    AdminchloctndComponent,
    AdminchlocdeviseComponent,
    AdminstegtndComponent,
    AdminstegdeviseComponent,
    AdminlctndComponent,
    AdminlcdeviseComponent,
    AdmincerttndComponent,
    AdmincertdeviseComponent,
    AdminancetndComponent,
    AdminancedeviseComponent,
    AdminsottndComponent,
    AdminsotdeviseComponent,
    RejoacatndComponent,
    RejoacadeviseComponent,
    EnvoacatndComponent,
    EnvoacadeviseComponent,
    CroacadeviseComponent,
    CroacatndComponent,
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
    boBordComdistTndComponent,
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
    RejectedfddeviseComponent,
    Cmp3wmancedeviseComponent,
    Cmp3wmancetndComponent,
    Cmp3wmcertdeviseComponent,
    Cmp3wmcerttndComponent,
    Cmp3wmlcdeviseComponent,
    Cmp3wmlctndComponent,
    Cmp3wmsotdeviseComponent,
    Cmp3wmsottndComponent,
    Cmp3wmstegdeviseComponent,
    Cmp3wmstegtndComponent,
    CmpcmddeviseComponent,
    CmpcmdtndComponent,
    CmpfddeviseComponent,
    CmpfdtndComponent,
    CmpfindeviseComponent,
    CmpfintndComponent,
    CmplcdeviseComponent,
    CmplctndComponent,
    CmpopdeviseComponent,
    CmpoptndComponent,
    CmprembdeviseComponent,
    CmprembtndComponent,
    CmpventdeviseComponent,
    CmpventtndComponent,
    DashboardComponent,
    BocrchlocdeviseComponent,
    TresochlocdeviseComponent,
    BocrchloctndComponent,
    CrdouanedeviseComponent,
    CrdouanetndComponent,
    CrristournedeviseComponent,
    CrristournetndComponent,
    CrjtndeviseComponent,
    CrjtntndComponent,
    CrpitdeviseComponent,
    CrpittndComponent,
    CrretsaldeviseComponent,
    CrretsaltndComponent,
    CrchrsocdeviseComponent,
    CrchrsoctndComponent,
    FisclocdeviseComponent,
    FiscloctndComponent,
    PeadeviseComponent,
    CdpeatndComponent,
    CrfrmintdeviseComponent,
    CrfrminttndComponent,
    EnvchlocdeviseComponent,
    EnvchloctndComponent,
    EnvristournedeviseComponent,
    EnvristournetndComponent,
    EnvdouancedeviseComponent,
    EnvdouanetndComponent,
    EnvchsowdeviseComponent,
    EnvchsowtndComponent,
    EnvfiscloctndComponent,
    EnvformintdeviseComponent,
    EnvforminttndComponent,
    EnvjetpresdeviseComponent,
    EnvjetprestndComponent,
    EnpeadeviseComponent,
    EnvpeatndComponent,
    EnvpittxtndComponent,
    EnvpittxdeviseComponent,
    EnvretsursaldeviseComponent,
    EnvretsursaltndComponent,
    RejchlocdeviseComponent,
    RejchloctndComponent,
    RejristtndComponent,
    RejristdeviseComponent,
    RejdouanedeviseComponent,
    RejdouanetndComponent,
    RejfisclocdeviseComponent,
    RejfiscloctndComponent,
    RejjetpresdeviseComponent,
    RejjetprestndComponent,
    RejpeadeviseComponent,
    RejpeatndComponent,
    RejpitxdeviseComponent,
    RejpitxtndComponent,
    RejretsaldeviseComponent,
    RejretsaltndComponent,
    RejformindeviseComponent,
    RejformintndComponent,
    RejchsocdeviseComponent,
    RejchsoctndComponent,
    BordchlocdeviseComponent,
    BordchloctndComponent,
    BordristdeviseComponent,
    BordristtndComponent,
    BorddouanedeviseComponent,
    BorddouanetndComponent,
    BordoacadeviseComponent,
    BordoacatndComponent,
    BordchsocdeviseComponent,
    BordchsoctndComponent,
    BordformintdeviseComponent,
    BordforminttndComponent,
    BordjetpresdeviseComponent,
    BordjetprestndComponent,
    BordpitdevieComponent,
    BordpittndComponent,
    BordretsaldeviseComponent,
    BordretsaltndComponent,
    FondRoulementComponent,
    RemboursementComponent,
    BobordancedeviseComponent,
    BobordcertdeviseComponent,
    BobordlcdeviseComponent,
    BobordsotdeviseComponent,
    BobordstegdeviseComponent,
    BobordventdirdeviseComponent,
    BordfisclocdeviseComponent,
    BobordpeatndComponent,
    BordfindeviseComponent,
    BordfintndComponent,
    BordopdeviseComponent,
    BordrembdeviseComponent,
    AdminfddeviseComponent,
    AdminbordancetndComponent,
    AdminbordancedeviseComponent,
    AdminbordcertdeviseComponent,
    AdminbordcerttndComponent,
    AdminbordsotdeviseComponent,
    AdminbordsottndComponent,
    AdminbordstegtndComponent,
    AdminbordstegdeviseComponent,
    AdminbordventtndComponent,
    AdminbordventdeviseComponent,
    AdminbordchlocdeviseComponent,
    AdminbordchloctndComponent,
    AdminborddouanetndComponent,
    AdminborddouanedeviseComponent,
    AdminOacaComponent,
    AdminbordoacadeviseComponent,
    AdminbordristdeviseComponent,
    AdminbordristtndComponent,
    AdminbordcmdtndComponent,
    AdminbordcmddeviseComponent,
    AdminbordfiscdeviseComponent,
    AdminbordfisctndComponent,
    AdminbordchsocdeviseComponent,
    AdminbordchsoctndComponent,
    AdminbordforminttndComponent,
    AdminbordformintdeviseComponent,
    AdminbordjetpresdeviseComponent,
    AdminbordjetprestndComponent,
    AdminbordpeatndComponent,
    AdminbordpeadeviseComponent,
    AdminbordpittndComponent,
    AdminbordpitdeviseComponent,
    AdminbordretsaldeviseComponent,
    AdminbordretsaltndComponent,
    AdminbordfdtndComponent,
    AdminbordfddeviseComponent,
    AdminbordopdeviseComponent,
    AdminbordoptndComponent,
    AdminbordremdeviseComponent,
    AdminbordremtndComponent,
    AdminbordlcdeviseComponent,
    AdminbordlctndComponent,
    AdminbordfintndComponent,
    AdminbordfindeviseComponent,
    AdminfactventtndComponent,
    AdminfactventdeviseComponent,
    AdminfactopdeviseComponent,
    AdminfactrembdeviseComponent,
    CmptchlocdeviseComponent,
    CmptchloctndComponent,
    CmptdouanedeviseComponent,
    CmptdouanetndComponent,
    CmptoacadeviseComponent,
    CmptoacatndComponent,
    CmptrisdeviseComponent,
    CmptristndComponent,
    CmptchsocdeviseComponent,
    CmptchsoctndComponent,
    CmptfisclocdeviseComponent,
    CmptfiscloctndComponent,
    CmptforminttndComponent,
    CmptformintdeviseComponent,
    CmptjetpresdeviseComponent,
    CmptjetprestndComponent,
    CmppeadeviseComponent,
    CmppeatndComponent,
    CmptpitdeviseComponent,
    CmptpittndComponent,
    CmptretsaldeviseComponent,
    CmptretsaltndComponent,
    BofactcrdeviseComponent,
    TresochsocdeviseComponent,
    TresochsoctndComponent,
    TresofisclocdeviseComponent,
    TresofiscloctndComponent,
    TresoformintdeviseComponent,
    TresoforminttndComponent,
    TresojetpresdeviseComponent,
    TresojetprestndComponent,
    TresopeadeviseComponent,
    TresopeatndComponent,
    TresopitdeviseComponent,
    TresopittndComponent,
    TresoretsaldeviseComponent,
    TresoretsaltndComponent,
    TresoancedeviseComponent,
    TresoancetndComponent,
    TresocertdeviseComponent,
    TresocerttndComponent,
    TresochloctndComponent,
    TresodouanedeviseComponent,
    TresodouanetndComponent,
    TresooacadeviseComponent,
    TresooacatndComponent,
    TresoristdeviseComponent,
    TresoristtndComponent,
    TresosotdeviseComponent,
    TresosottndComponent,
    TresostegdeviseComponent,
    TresostegtndComponent,
    TresocomdistdeviseComponent,
    TresocomdisttndComponent,
    TresofddeviseComponent,
    TresofdtndComponent,
    TresofindeviseComponent,
    TresofintndComponent,
    TresolcdeviseComponent,
    TresolctndComponent,
    TresooperdeviseComponent,
    TresoopertndComponent,
    TresorembdeviseComponent,
    TresorembtndComponent,
    TresoventdirdeviseComponent,
    TresoventdirtndComponent,
    TresoComponent
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

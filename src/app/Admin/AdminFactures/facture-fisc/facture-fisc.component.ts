import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../dataservice/data.service";

@Component({
  selector: 'app-facture-fisc',
  templateUrl: './facture-fisc.component.html',
  styleUrls: ['./facture-fisc.component.css']
})
export class FactureFiscComponent implements OnInit {

  factureToUpdate={"id":"","bordereau":"","devise":"","montant":"","objet":"",
  "num_po":"","status":"","factname":"","pathpdf":"","datereception":""
  ,"created_by":"","dossier":"","fournisseur":""
  ,"created_at":"","updated_at":"","beneficiaire":""};

  factureToCreate={"id":"","bordereau":"","devise":"","montant":"","objet":"",
  "num_po":"","status":"","factname":"","pathpdf":"","datereception":""
  ,"created_by":"","dossier":"","fournisseur":""
  ,"created_at":"","updated_at":"","beneficiaire":""};


  Factures:any[];
  firstn:any;
  p:number=1;


  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.showFacture();
  }


  showFacture(){
    this.dataService.showFactureFisc().subscribe((data: any[])=>{
      console.log(data);
      this.Factures = data;
    })  
    }
 
    Search(){
      if(this.firstn ==""){
        this.ngOnInit();
      }else if(this.firstn[0]>=0 && this.firstn[0]<=10){
        this.Factures=this.Factures.filter(res=>{
          return res.created_by.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
        })
      }else{
        this.Factures=this.Factures.filter(res=>{
          return res.status.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
        })
      }
    }

    key: string='id';
  reverse: boolean=false;
  sort(key){
    this.key=key;
    this.reverse= !this.reverse;
  }


  deleteFacture(id){
    console.log(id);
    this.dataService.deleteFactureFisc(id).subscribe((msg: any[])=>{
      console.log(msg);
    }) 
    this.ngOnInit();
}


updateFacture(){
  this.dataService.updateFactureFisc(this.factureToUpdate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}

factureModal(fact){
this.factureToUpdate=fact;
}

createFacture(){
  this.dataService.createFactureFisc(this.factureToCreate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}
}
 
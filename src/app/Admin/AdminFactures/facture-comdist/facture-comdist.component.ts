import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../dataservice/data.service";

@Component({
  selector: 'app-facture-comdist',
  templateUrl: './facture-comdist.component.html',
  styleUrls: ['./facture-comdist.component.css']
})
export class FactureComdistComponent implements OnInit {
  
  Factures:any[];
  firstn:any;
  p:number=1;
  factureToUpdate={"id":"","bordereau":"","devise":"","montant":"","objet":"",
  "num_po":"","status":"","factname":"","pathpdf":"","datereception":""
  ,"created_by":"","dossier":"","fournisseur":"","beneficiaire":"","numFacture":""
  ,"direction":"","createdAt":"","updatedAt":"","idfiscale":""};

  factureToCreate={"id":"","bordereau":"","devise":"","montant":"","objet":"",
  "num_po":"","status":"","factname":"","pathpdf":"","datereception":""
  ,"created_by":"","dossier":"","fournisseur":"","beneficiaire":"","numFacture":""
  ,"direction":"","createdAt":"","updatedAt":"","idfiscale":""};
  user:any;


  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.showFacture();
    this.dataService.getState().subscribe((data:any)=>{
      this.user=data;
      console.log(this.user);
    })
     
  }

  showFacture(){
    this.dataService.showFactureComdist().subscribe((data: any[])=>{
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
          return res.objet.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
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
    this.dataService.deleteFactureCmd(id).subscribe((msg: any[])=>{
      console.log(msg);
    }) 
    this.ngOnInit();
}


updateFacture(){
  this.dataService.updateFacturecmd(this.factureToUpdate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}

factureModal(fact){
this.factureToUpdate=fact;
}

createFacture(){
  this.dataService.createFacturecmd(this.factureToCreate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}




}

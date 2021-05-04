import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../dataservice/data.service";


@Component({
  selector: 'app-facture-financement',
  templateUrl: './facture-financement.component.html',
  styleUrls: ['./facture-financement.component.css']
})
export class FactureFinancementComponent implements OnInit {

  Factures:any[];
  firstn:any;
  p:number=1;
  factureToUpdate={"id":"","bordereau":"","devise":"","montant":"","objet":"",
  "num_po":"","status":"","factname":"","pathpdf":""
  ,"created_by":"","typeFin":"","destinataire":"","updated":"","credit":"","echeance":""};

  factureToCreate={"id":"","bordereau":"","devise":"","montant":"","objet":"",
  "num_po":"","status":"","factname":"","pathpdf":""
  ,"created_by":"","typeFin":"","destinataire":"","updated":"","credit":"","echeance":""}


  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.showFacture();
  }

  showFacture(){
    this.dataService.showFactureFin().subscribe((data: any[])=>{
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
    this.dataService.deleteFactureFin(id).subscribe((msg: any[])=>{
      console.log(msg);
    }) 
    this.ngOnInit();
}


updateFacture(){
  this.dataService.updateFactureFin(this.factureToUpdate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}

factureModal(fact){
this.factureToUpdate=fact;
}

createFacture(){
  this.dataService.createFactureFin(this.factureToCreate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}



}

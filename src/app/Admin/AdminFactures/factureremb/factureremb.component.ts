import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../dataservice/data.service";


@Component({
  selector: 'app-factureremb',
  templateUrl: './factureremb.component.html',
  styleUrls: ['./factureremb.component.css']
})
export class FacturerembComponent implements OnInit {

  Factures:any[];
  firstn:any;
  p:number=1;

  factureToUpdate={"id":"","bordereau":"","devise":"","montant":"","objet":"",
  "num_po":"","status":"","factname":"","pathpdf":"","datereception":""
  ,"created_by":"","dossier":"","structure":"","datepo":"","beneficiaire":"","direction":""};
  
  factureToCreate={"id":"","bordereau":"","devise":"","montant":"","objet":"",
  "num_po":"","status":"","factname":"","pathpdf":"","datereception":""
  ,"created_by":"","dossier":"","structure":"","datepo":"","beneficiaire":"","direction":""};



  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.showFacture();
  }

  showFacture(){
    this.dataService.showFactureFdRemp().subscribe((data: any[])=>{
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
    this.dataService.deleteFactureFdRemp(id).subscribe((msg: any[])=>{
      console.log(msg);
    }) 
    this.ngOnInit();
}


updateFacture(){
  this.dataService.updateFactureFdRemp(this.factureToUpdate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}

factureModal(fact){
this.factureToUpdate=fact;
}

createFacture(){
  this.dataService.createFactureFdRemp(this.factureToCreate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}



}

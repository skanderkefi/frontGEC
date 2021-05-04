import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../dataservice/data.service";

@Component({
  selector: 'app-facture3wm',
  templateUrl: './facture3wm.component.html',
  styleUrls: ['./facture3wm.component.css']
})
export class Facture3wmComponent implements OnInit {

  Factures:any[];
  firstn:any;
  p:number=1;
  factureToUpdate={"id":"","bordereau":"","devise":"","montant":"","objet":"",
  "num_po":"","status":"","factname":"","pathname":"","datereception":""
  ,"created_by":"","fournisseur":"","num_fact":""
  ,"direction":""};

  factureToCreate={"id":"","bordereau":"","devise":"","montant":"","objet":"",
  "num_po":"","status":"","factname":"","pathname":"","datereception":""
  ,"created_by":"","fournisseur":"","num_fact":""
  ,"direction":""};


 

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.showFacture();

  }

  showFacture(){
    this.dataService.showFacture3wm().subscribe((data: any[])=>{
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
          return res.num_fact.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
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
    this.dataService.deleteFacture3wm(id).subscribe((msg: any[])=>{
      console.log(msg);
    }) 
    this.ngOnInit();
}


updateFacture(){
  this.dataService.updateFacture3wm(this.factureToUpdate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}

factureModal(fact){
this.factureToUpdate=fact;
}

createFacture(){
  this.dataService.createFacture3wm(this.factureToCreate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}



}

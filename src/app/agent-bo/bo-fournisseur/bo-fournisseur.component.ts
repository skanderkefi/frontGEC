import { Component, OnInit } from '@angular/core';
import {Fournisseur} from './../../models/fournisseur.model'
import {DataService} from "../../dataservice/data.service";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-bo-fournisseur',
  templateUrl: './bo-fournisseur.component.html',
  styleUrls: ['./bo-fournisseur.component.css']
})
export class BoFournisseurComponent implements OnInit {

  head = [['ID', 'NAME', 'CATEGORIE', 'IDF', 'ADRESSE', 'NAT', 'CRP', 'CLE', 'MAJLE']]
  Fournisseurs:any[];
  firstn:any;
  p:number=1;
  exportContacts: Fournisseur[] = [];



  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.showFournisseur();
  }

  showFournisseur(){
    
    this.dataService.showfournisseurs().subscribe((data: any[])=>{
      console.log(data);
      this.Fournisseurs = data;
    })  
    }
    
    Search(){
      if(this.firstn ==""){
        this.ngOnInit();
      }else if(this.firstn[0]>=0 && this.firstn[0]<=10){
        this.Fournisseurs=this.Fournisseurs.filter(res=>{
          return res.idFiscale.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
        })
      }else{
        this.Fournisseurs=this.Fournisseurs.filter(res=>{
          return res.name.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
        })
      }
    }

    key: string='id';
  reverse: boolean=false;
  sort(key){
    this.key=key;
    this.reverse= !this.reverse;
  }


  exportData(tableId: string) {
    this.dataService.exportToFile("contacts", tableId);
  }


  convert() {

const doc = new jsPDF()

autoTable(doc, { html: '#contactJs' })
doc.save('table.pdf')

}
}
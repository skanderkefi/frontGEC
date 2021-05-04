import { Component, OnInit } from '@angular/core';

import {DataService} from "../../../../dataservice/data.service";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-bobvent-tnd',
  templateUrl: './bobvent-tnd.component.html',
  styleUrls: ['./bobvent-tnd.component.css']
})
export class BobventTndComponent implements OnInit {

  Factures3wmTnd:any[]=[];
  firstn:any;
  Bordereaux:any[];
  BordereauxVentTnd:any[]=[];
  bordereauToCreate={"createdAt":Date.now(),"createdBy":"4125","folder":"VENTILATION DIRECTE TND","id":"",
  "nature":"VENTILATION DIRECTE","natureRaff":"TND","reference":"BOF/3WM-TND/","sentAt":"","sentBy":"",
  "status":"en cours","updatedAt":Date.now()};
  p:number=1;


  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.showBordereaux();
  }

  showBordereaux(){
    this.dataService.showBordereauVentDirect().subscribe((data: any[])=>{
      console.log(data);
      for(let i=0; i<data.length; i++){
        if(data[i].folder=="VENTILATION DIRECTE TND" )
        this.BordereauxVentTnd[i]=data[i];
      }
      for(let i=0; i<this.BordereauxVentTnd.length; i++){
        if(this.BordereauxVentTnd[i]==null)
        this.BordereauxVentTnd.splice(i,1)
      }
      for(let i=0; i<this.BordereauxVentTnd.length; i++){
        if(this.BordereauxVentTnd[i]==null)
        this.BordereauxVentTnd.splice(i,1)
      }
      console.log(this.BordereauxVentTnd);
    })
    
      
    }
    
    createBordereau(){
      var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear()
    var months = new Array("Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul", "Aug", "Sep",
      "Oct", "Nov", "Dec");  

    var today = curr_date + "-" + months[curr_month] + "-" + curr_year 
    this.bordereauToCreate.reference=this.bordereauToCreate.reference+today;
      this.dataService.createBord(this.bordereauToCreate).subscribe((msg: any[])=>{
        console.log(msg);
      }) 
      location.reload();

    }

    bordereauModal(bordereauToCreate){
     this.bordereauToCreate= bordereauToCreate    }

     key: string='id';
     reverse: boolean=false;
     sort(key){
       this.key=key;
       this.reverse= !this.reverse;
     }

     Search(){
      if(this.firstn ==""){
        this.ngOnInit();}
      else{
        this.BordereauxVentTnd=this.BordereauxVentTnd.filter(res=>{
          return res.createdBy.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
        })
      }
    }

    exportData(tableId: string) {
      this.dataService.exportToFile("contacts", tableId);
    }
  
  
    convert() {
  
  const doc = new jsPDF()
  
  autoTable(doc, { html: '#Bordereaux3wmtndTable' })
  doc.save('table.pdf')
  
  }

  factureConvert(){
    const doc = new jsPDF()
  
    autoTable(doc, { html: '#Facture3wmtndTable' })
    doc.save('table.pdf')
  }

  deleteBordereau(id){
    console.log(id);
    this.dataService.deleteBord(id).subscribe((msg: any[])=>{
      console.log(msg);
    })
    location.reload(); 
}

envoyerBordereau(id){
  for(let i=0; i<this.BordereauxVentTnd.length; i++){
    if(this.BordereauxVentTnd[i].id==id)
    this.BordereauxVentTnd[i].status="envoyé"
    this.dataService.updateBord(this.BordereauxVentTnd[i]).subscribe((msg: any[])=>{
      console.log(msg);
    });
  }
  location.reload();

}

showFacture(){
  this.dataService.showFactureComdist().subscribe((data: any[])=>{
    console.log(data);
    for(let i=0; i<data.length; i++){
      if(data[i].devise=="TND" )
      this.Factures3wmTnd[i]=data[i];
    }
    for(let i=0; i<this.Factures3wmTnd.length; i++){
      if(this.Factures3wmTnd[i]==null)
      this.Factures3wmTnd.splice(i,1)
    }
    for(let i=0; i<this.Factures3wmTnd.length; i++){
      if(this.Factures3wmTnd[i]==null)
      this.Factures3wmTnd.splice(i,1)
    }
    console.log(this.Factures3wmTnd);
  })
  
    
  }
   


}

import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../dataservice/data.service";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-bo-b3wmtnd',
  templateUrl: './bo-b3wmtnd.component.html',
  styleUrls: ['./bo-b3wmtnd.component.css']
})
export class BoB3wmtndComponent implements OnInit {
 
  Factures3wmTnd:any[]=[];
  firstn:any;
  Bordereaux:any[];
  Bordereaux3wmTnd:any[]=[];
  bordereauToCreate={"createdAt":"","createdBy":"4125","folder":"3WM TND","id":"",
  "nature":"3WM","natureRaff":"TND","reference":"BOF/3WM-TND/","sentAt":"","sentBy":"",
  "status":"en cours","updatedAt":""};
  p:number=1;


  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.showBordereaux();
  } 

  showBordereaux(){
    this.dataService.showBordereau3wm().subscribe((data: any[])=>{
      console.log(data);
      for(let i=0; i<data.length; i++){
        if(data[i].folder=="3WM TND" )
        this.Bordereaux3wmTnd[i]=data[i];
      }
      for(let i=0; i<this.Bordereaux3wmTnd.length; i++){
        if(this.Bordereaux3wmTnd[i]==null)
        this.Bordereaux3wmTnd.splice(i,1)
      }
      for(let i=0; i<this.Bordereaux3wmTnd.length; i++){
        if(this.Bordereaux3wmTnd[i]==null)
        this.Bordereaux3wmTnd.splice(i,1)
      }
      console.log(this.Bordereaux3wmTnd);
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

    this.bordereauToCreate.createdAt= formatDate(Date.now(),'yyyy-MM-dd','en_US');
    this.bordereauToCreate.updatedAt= formatDate(Date.now(),'yyyy-MM-dd','en_US');
    this.bordereauToCreate.reference=this.bordereauToCreate.reference+today;
      this.dataService.createBord(this.bordereauToCreate).subscribe((msg: any[])=>{
        console.log(msg);
      }) 
      

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
        this.Bordereaux3wmTnd=this.Bordereaux3wmTnd.filter(res=>{
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
  for(let i=0; i<this.Bordereaux3wmTnd.length; i++){
    if(this.Bordereaux3wmTnd[i].id==id)
    this.Bordereaux3wmTnd[i].status="envoyé"
    this.dataService.updateBord(this.Bordereaux3wmTnd[i]).subscribe((msg: any[])=>{
      console.log(msg);
    });
  }
  location.reload();

}

showFacture(){
  this.dataService.showFacture3wm().subscribe((data: any[])=>{
    console.log(data);
    let j=0;
    for(let i=0; i<data.length; i++){

      if(data[i].dossier=="3WM TND"){

        this.Factures3wmTnd[j]=data[i];

      j++;
    }}
    console.log("fact3wm");
    
    console.log(this.Factures3wmTnd);
  })
  
}
    

}
 
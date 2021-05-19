import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../../dataservice/data.service";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tnd',
  templateUrl: './tnd.component.html',
  styleUrls: ['../../../facture.css']
})
export class remenvTndComponent implements OnInit {

  selectedFile: File;
  date={"startdate":"","enddate":""}
  fournisseur:any;
  Factures3wmTnd:any[]=[];
  firstn:any;
  p:number=1;
  factureToCreate={"bordereau":"","created_by":"4125","id":"",
  "devise": "TND", "direction":"","dossier": "REMBOURSEMENT TND" ,"factname":"","fournisseur":"",
  "status":"","montant":"","num_po":"","objet":"",
  "structure":"","datereception":"","beneficiaire":"","datepo":"","pathPdf":""};

 factureToUpdate={"bordereau":"","created_by":"4125","id":"",
 "devise": "TND", "direction":"","dossier": "REMBOURSEMENT DEVISE" ,"factname":"","fournisseur":"",
 "status":"","montant":"","num_po":"","objet":"",
 "structure":"","datereception":"","beneficiaire":"","datepo":"","pathPdf":""};

 

 

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.showFacture();
  }

  Search(){
    if(this.firstn ==""){
      this.ngOnInit();}
    else{
      this.Factures3wmTnd=this.Factures3wmTnd.filter(res=>{
        return res.num_po.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
      })
    }
  }

 
  showFacture(){
    this.dataService.showFactureFdRemp().subscribe((data: any[])=>{
      console.log(data);
      let j=0;
      for(let i=0; i<data.length; i++){
        if(data[i].dossier=="REMBOURSEMENT TND" && data[i].status=="sent") 
        this.Factures3wmTnd[j]=data[i];
        j++      }
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

    createFacture(){
         this.dataService.createFactureFdRemp(this.factureToCreate).subscribe((msg: any[])=>{
        console.log(msg);
      }) 
       location.reload(); 

    }

    factureCreateModal(factureToCreate){
      this.factureToCreate= factureToCreate    }

      factureUpdateModal(facture){
        this.factureToUpdate=facture;
        }


      exportData(tableId: string) {
        this.dataService.exportToFile("facture", tableId);
      }

      convertToPdf() {
  
        const doc = new jsPDF()
        
        autoTable(doc, { html: '#Facture3wmtndTable' })
        doc.save('tableFacture.pdf')
        
        }

        key: string='id';
        reverse: boolean=false;
        sort(key){
          this.key=key;
          this.reverse= !this.reverse;
        }

        updateFacture(){
          this.dataService.updateFactureFdRemp(this.factureToUpdate).subscribe((msg: any[])=>{
            console.log(msg);
          }) 
           location.reload(); 

        }

        deleteFacture(id){
          console.log(id);
          this.dataService.deleteFactureFdRemp(id).subscribe((msg: any[])=>{
            console.log(msg);
          })
          location.reload(); 
        }

        searchPerDate(){
         
          
          try{
            let startdate = formatDate(this.date.startdate,'yyyy-MM-dd','en_US');
            let enddate = formatDate(this.date.enddate,'yyyy-MM-dd','en_US');
  
            
            for(let i=0; i<this.Factures3wmTnd.length; i++){
              
              if (this.Factures3wmTnd[i].dateFact<=startdate || this.Factures3wmTnd[i].dateFact>=enddate){
                 this.Factures3wmTnd.splice(i,1)
              }
            }
          
          }catch{
            console.log("no date found !!!!")
          }
           
        }
        onSearchChange(searchValue: string): void {  
          console.log(searchValue);
          
          this.dataService.getFournisseur(searchValue).subscribe((data: any)=>{
            this.factureToCreate.fournisseur=data.name
            this.fournisseur=data
            console.log(this.fournisseur);
            console.log("=========")
            console.log( this.factureToCreate.fournisseur)
        })
      
       
      }
 


}

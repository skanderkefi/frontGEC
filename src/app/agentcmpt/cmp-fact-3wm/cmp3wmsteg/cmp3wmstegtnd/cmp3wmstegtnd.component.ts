import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../dataservice/data.service";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cmp3wmstegtnd',
  templateUrl: './cmp3wmstegtnd.component.html',
  styleUrls: ['./cmp3wmstegtnd.component.css']
})
export class Cmp3wmstegtndComponent implements OnInit {

   
  date={"startdate":"","enddate":""}
  fournisseur:any;
  selectedFile: File;
  Factures3wmTnd:any[]=[];
  firstn:any; 
  p:number=1;
  factureToValidate={"bordereau":"","createdBy":"","dateFact":"","id":"",
  "devise": "","direction":"","dossier": "" ,"factname":"","fournisseur":"",
  "status":"","montant":"","num_fact":"","num_po":"","objet":"",
  "pathPdf":"","periode_conso":"","structure":"","delai":"","datereception":"",
  "pieceJointe":"","idfiscale":"","Rejectraison":"","apCode":""};

 factureToReject={"bordereau":"","createdBy":"","dateFact":"","id":"",
 "devise": "","direction":"","dossier": "" ,"factname":"","fournisseur":"",
 "status":"","montant":"","num_fact":"","num_po":"","objet":"",
 "pathPdf":"","periode_conso":"","structure":"","delai":"","datereception":"",
 "pieceJointe":"","idfiscale":"","Rejectraison":"","apCode":""};

 
 


 
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
    this.dataService.showFacture3wm().subscribe((data: any[])=>{
      console.log(data);
      let j=0;
      for(let i=0; i<data.length; i++){
        if(data[i].dossier=="3WM STEG TND" && data[i].status=="sent")
        this.Factures3wmTnd[j]=data[i];
        j++;      }
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

  

    factureRejectModal(factureToCreate){
      this.factureToReject= factureToCreate    }

      factureUpdateModal(facture){
        this.factureToValidate=facture;
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

        rejectFacture(){
          
          this.dataService.updateFacture3wm(this.factureToReject).subscribe((msg: any[])=>{
            console.log(msg);
          }) 
          // location.reload();
        }

        validateFacture(){
          
          this.dataService.updateFacture3wm(this.factureToValidate).subscribe((msg: any[])=>{
            console.log(msg);
          }) 
          // location.reload();
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
     


     
     

}

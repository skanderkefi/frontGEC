import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../dataservice/data.service";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatDate } from '@angular/common';
import { IMultiSelectOption,IMultiSelectTexts, IMultiSelectSettings } from 'ngx-bootstrap-multiselect';

@Component({
  selector: 'app-tresocertdevise',
  templateUrl: './tresocertdevise.component.html',
  styleUrls: ['./tresocertdevise.component.css']
})
export class TresocertdeviseComponent implements OnInit {

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
  "pieceJointe":"","idfiscale":"","dateEnvoieAuAp":"","dateRefusParAp":"","dateValidationParAp":"",
  "dateRefusParTreso":"","dateValidationParTreso":"","raisonRefusAp":"","codeAp":"","codeTreso":"",
  "raisonRefusTreso":""};

 factureToReject={"bordereau":"","createdBy":"","dateFact":"","id":"",
 "devise": "","direction":"","dossier": "" ,"factname":"","fournisseur":"",
 "status":"","montant":"","num_fact":"","num_po":"","objet":"",
 "pathPdf":"","periode_conso":"","structure":"","delai":"","datereception":"",
 "pieceJointe":"","idfiscale":"","dateEnvoieAuAp":"","dateRefusParAp":"","dateValidationParAp":"",
 "dateRefusParTreso":"","dateValidationParTreso":"","raisonRefusAp":"","codeAp":"","codeTreso":"",
"raisonRefusTreso":""};

 
 
 

 
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
        if(data[i].dossier=="3WM DEVISE CERT" && data[i].status=="validatedFromAp")
        this.Factures3wmTnd[j]=data[i];
        j++;
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

  

    factureRejectModal(factureToCreate){
      this.factureToReject.dateRefusParTreso= formatDate(Date.now(),'yyyy-MM-dd','en_US').toString();
      this.factureToReject= factureToCreate    }

      
    factureValidateModal(facture){
      this.factureToValidate.dateValidationParTreso= formatDate(Date.now(),'yyyy-MM-dd','en_US').toString();
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
          this.factureToReject.status="rejectedFromTreso";

          this.factureToReject.dateRefusParAp=this.getToday();
          this.dataService.updateFacture3wm(this.factureToReject).subscribe((msg: any[])=>{
            console.log(msg);
          }) 
          // location.reload();
        }

        validateFacture(){
          this.factureToValidate.status="validatedFromTreso";
          this.factureToValidate.dateValidationParAp=this.getToday();
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
     


     
      getToday():string{
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth();
        var curr_year = d.getFullYear()
        var months = new Array("Janvier", "Fevrier", "Mars",
          "Avril", "Mai", "Juin", "Juilllet", "Aout", "Septembre",
          "Octobre", "Novembre", "Decembre");  
    
        var today = curr_date + "-" + months[curr_month] + "-" + curr_year;
        return today;
      }
     

}

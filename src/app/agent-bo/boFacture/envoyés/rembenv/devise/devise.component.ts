import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../../dataservice/data.service";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatDate } from '@angular/common';
import { IMultiSelectOption,IMultiSelectTexts, IMultiSelectSettings } from 'ngx-bootstrap-multiselect';


@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['../../../facture.css']
})
export class remenvDeviseComponent implements OnInit {

  date={"startdate":"","enddate":""}
  fournisseur:any;
  selectedFile: File;
  Factures3wmTnd:any[]=[];
  firstn:any;
  p:number=1;
  factureToCreate={"bordereau":"","created_by":"4125","id":"",
  "devise": "", "direction":"","dossier": "REMBOURSEMENT DEVISE" ,"factname":"","fournisseur":"",
  "status":"","montant":"","num_po":"","objet":"",
  "structure":"","datereception":"","beneficiaire":"","datepo":"","pathPdf":""
  ,"pieceJointe":"","idfiscale":""};

 factureToUpdate={"bordereau":"","created_by":"4125","id":"",
 "devise": "", "direction":"","dossier": "REMBOURSEMENT DEVISE" ,"factname":"","fournisseur":"",
 "status":"","montant":"","num_po":"","objet":"",
 "structure":"","datereception":"","beneficiaire":"","datepo":"","pathPdf":""
 ,"pieceJointe":"","idfiscale":""};


// Default selection
optionsModel: number[] = [];
 
// Settings configuration
mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
};

// Text configuration
myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select',
    allSelected: 'All selected',
};

 myOptions: IMultiSelectOption[];
 

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
        if(data[i].dossier=="REMBOURSEMENT DEVISE" && data[i].status=="sent")
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




        onUploadToUpdate() {
        
          const uploadImageData = new FormData();
          uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
         
          
          this.dataService.upload(uploadImageData).subscribe((response) => {
            console.log(response);
            this.factureToUpdate.pathPdf=response.body.toString();
          }
          );
        }


      public onFileChanged(event) {
   
        //Select File
        this.selectedFile = event.target.files[0];
      
       
      }

      onUploadToCreate() {
        
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
       
        
        this.dataService.upload(uploadImageData).subscribe((response) => {
          console.log(response);
          this.factureToCreate.pathPdf=response.body.toString();
        }
        );
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
      onSearchcreateChange(searchValue: string): void {  
        console.log(searchValue);
        
        this.dataService.getFournisseur(searchValue).subscribe((data: any)=>{
          this.factureToCreate.fournisseur=data.name
          this.factureToCreate.idfiscale=data.idFiscale
          this.fournisseur=data
          console.log(this.fournisseur);
          console.log("=========")
          console.log( this.factureToCreate.fournisseur)
      })
    
     
    }

    onSearchupdateChange(searchValue: string): void {  
      console.log(searchValue);
      
      this.dataService.getFournisseur(searchValue).subscribe((data: any)=>{
        this.factureToUpdate.fournisseur=data.name
        this.factureToUpdate.idfiscale=data.idFiscale
        this.fournisseur=data
        console.log(this.fournisseur);
        console.log("=========")
        console.log( this.factureToCreate.fournisseur)
    })
  
   
  }



  
  pieces:any[]=[];
  objects:any[]=[];
  showObjects(){
    this.dataService.showObjects().subscribe((data:any[])=>{

      this.objects=data;
      console.log(this.objects);
      
    })
  }

  showPieces(){
    this.dataService.showPieces().subscribe((data:any[])=>{
      this.myOptions=data;
      console.log("pieces");
      console.log(this.myOptions);
      
    })
  }

     
 


}

import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../../dataservice/data.service";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatDate } from '@angular/common';
import { IMultiSelectOption,IMultiSelectTexts, IMultiSelectSettings } from 'ngx-bootstrap-multiselect';
 
@Component({
  selector: 'app-bocrchloctnd',
  templateUrl: './bocrchloctnd.component.html',
  styleUrls: ['./bocrchloctnd.component.css']
})
export class BocrchloctndComponent implements OnInit {
  pieces:any[]=[];
  objects:any[]=[];
  date={"startdate":"","enddate":""}
  fournisseur:any;
  selectedFile: File;
  Factures3wmTnd:any[]=[];
  firstn:any;
  p:number=1;
  factureToCreate={"bordereau":"","createdBy":"4125","dateFact":Date.now(),"id":"",
  "devise": "TND","direction":"","dossier": "CHARGE LOCATIVE - TND" ,"factname":"","fournisseur":"",
  "status":"en cours","montant":"","num_fact":"","num_po":"","objet":"",
  "pathPdf":"","periode_conso":"","structure":"","delai":"","idfiscale":"","datereception":"",
  "strucord":"","pieceJointe":""};


  

 factureToUpdate={"bordereau":"","createdBy":"4125","dateFact":Date.now(),"id":"",
 "devise": "TND","direction":"","dossier": "CHARGE LOCATIVE - TND" ,"factname":"","fournisseur":"",
 "status":"en cours","montant":"","num_fact":"","num_po":"","objet":"",
 "pathPdf":"","periode_conso":"","structure":"","delai":"","idfiscale":"","datereception":"",
 "strucord":"","pieceJointe":""};

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
    this.showObjects();
     this.showFacture();
     this.showPieces();
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
      for(let i=0; i<data.length; i++){
        if(data[i].dossier="CHARGE LOCATIVE - TND" )
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

    createFacture(){
      for(let i=0;i<this.optionsModel.length;i++){
        this.factureToCreate.pieceJointe=this.optionsModel[i].toString()+","+this.factureToCreate.pieceJointe;
      }
         this.dataService.createFacture3wm(this.factureToCreate).subscribe((msg: any[])=>{
        console.log(msg);
      }) 
      console.log(this.factureToCreate.objet);
      
      // location.reload();
    }

    factureCreateModal(factureToCreate){
      this.factureToCreate.datereception= formatDate(Date.now(),'yyyy-MM-dd','en_US').toString();
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
          for(let i=0;i<this.optionsModel.length;i++){
            this.factureToUpdate.pieceJointe=this.optionsModel[i].toString()+","+this.factureToCreate.pieceJointe;
          }
          this.dataService.updateFacture3wm(this.factureToUpdate).subscribe((msg: any[])=>{
            console.log(msg);
          }) 
          location.reload();
        }

        deleteFacture(id){
          console.log(id);
          this.dataService.deleteFacture3wm(id).subscribe((msg: any[])=>{
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
        onUploadToCreate() {
        
          const uploadImageData = new FormData();
          uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
         
          
          this.dataService.upload(uploadImageData).subscribe((response) => {
            console.log(response);
            this.factureToCreate.pathPdf=response.body.toString();
          }
          );
        }


      public onFileChanged(event) {
   
        //Select File
        this.selectedFile = event.target.files[0];
      
       
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
          
      })
    
     
    }

    onSearchupdateChange(searchValue: string): void {  
      console.log(searchValue);
      
      this.dataService.getFournisseur(searchValue).subscribe((data: any)=>{
        this.factureToUpdate.fournisseur=data.name
        this.factureToUpdate.idfiscale=data.idFiscale
        this.fournisseur=data
       
    })
  
   
  }

     

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
      console.log(this.pieces);
      
    })
  }

 
  

}

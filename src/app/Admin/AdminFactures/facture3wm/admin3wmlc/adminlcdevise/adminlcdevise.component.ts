import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../../dataservice/data.service";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatDate } from '@angular/common';
import { IMultiSelectOption,IMultiSelectTexts, IMultiSelectSettings } from 'ngx-bootstrap-multiselect';

@Component({
  selector: 'app-adminlcdevise',
  templateUrl: './adminlcdevise.component.html',
  styleUrls: ['./adminlcdevise.component.css']
})
export class AdminlcdeviseComponent implements OnInit {

  date={"startdate":"","enddate":""}
  fournisseur:any;
  selectedFile: File;
  Factures3wmdevise:any[]=[];
  firstn:any; 
  p:number=1;
  factureToCreate={"bordereau":"","createdBy":"4125","dateFact":Date.now(),"id":"",
  "devise": "","direction":"","dossier": "3WM DEVISE SOTETEL" ,"factname":"","fournisseur":"",
  "status":"en cours","montant":"","num_fact":"","num_po":"","objet":"",
  "pathPdf":"","periode_conso":"","structure":"","delai":"","idfiscale":"","datereception":Date.now()
  ,"pieceJointe":""};

 factureToUpdate={"bordereau":"","createdBy":"4125","dateFact":Date.now(),"id":"",
 "devise": "","direction":"","dossier": "3WM DEVISE  SOTETEL" ,"factname":"","fournisseur":"",
 "status":"en cours","montant":"","num_fact":"","num_po":"","objet":"",
 "pathPdf":"","periode_conso":"","structure":"","delai":"","datereception":Date.now()
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
    this.showObjects();
    this.showPieces();
   
  }

  onChange() {
    console.log(this.optionsModel);
}

  Search(){
    if(this.firstn ==""){
      this.ngOnInit();}
    else{
      this.Factures3wmdevise=this.Factures3wmdevise.filter(res=>{
        return res.num_po.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
      })
    }
  }


  showFacture(){
    this.dataService.showFacture3wm().subscribe((data: any[])=>{
      console.log(data);
      for(let i=0; i<data.length; i++){
        if(data[i].dossier=="3WM DEVISE SOTETEL" )
        this.Factures3wmdevise[i]=data[i];
      }
      for(let i=0; i<this.Factures3wmdevise.length; i++){
        if(this.Factures3wmdevise[i]==null)
        this.Factures3wmdevise.splice(i,1)
      }
      for(let i=0; i<this.Factures3wmdevise.length; i++){
        if(this.Factures3wmdevise[i]==null)
        this.Factures3wmdevise.splice(i,1)
      }
      console.log(this.Factures3wmdevise);
    })
    
     
    } 

    createFacture(){
      
      for(let i=0;i<this.optionsModel.length;i++){
        this.factureToCreate.pieceJointe=this.optionsModel[i].toString()+","+this.factureToCreate.pieceJointe;
      }
         this.dataService.createFacture3wm(this.factureToCreate).subscribe((msg: any[])=>{
        console.log(msg);
      }) 
      //  location.reload();
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

          
          for(let i=0; i<this.Factures3wmdevise.length; i++){
            
            if (this.Factures3wmdevise[i].dateFact<=startdate || this.Factures3wmdevise[i].dateFact>=enddate){
               this.Factures3wmdevise.splice(i,1)
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

     
 // workflow tools:
 envoieAp:boolean=false;
 refusAp:boolean=false;
 validationAp:boolean=false;
 refustreso:boolean=false;
 validationtreso:boolean=false;
 factureWfDetails:any
 
  factureWorkflow(fact){
    if (fact.dateEnvoieAuAp!="" && fact.dateEnvoieAuAp!=null){
      this.envoieAp=true;
    }
    if (fact.dateRefusParAp!="" && fact.dateRefusParAp!=null){
      this.refusAp=true;
    }
    if (fact.datValidationParAp!="" && fact.datValidationParAp!=null){
      this.validationAp=true;
    }
    if (fact.dateRefusParTreso!="" && fact.dateRefusParTreso!=null){
      this.refustreso=true;
    }
    if (fact.dateValidationParTreso!="" && fact.dateValidationParTreso!=null){
      this.validationtreso=true;
    }
    this.factureWfDetails=fact;
  }

}

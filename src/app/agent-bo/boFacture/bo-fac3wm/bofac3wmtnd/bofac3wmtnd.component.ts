import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../dataservice/data.service";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatDate } from '@angular/common';
import { IMultiSelectOption,IMultiSelectTexts, IMultiSelectSettings } from 'ngx-bootstrap-multiselect';



 
@Component({
  selector: 'app-bofac3wmtnd',
  templateUrl: './bofac3wmtnd.component.html',
  styleUrls: ['./bofac3wmtnd.component.css']
})
export class Bofac3wmtndComponent implements OnInit {

  pieces:any[]=[];
  objects:any[]=[];
  selectedFile: File;
  date={"startdate":"","enddate":""}
  fournisseur:any;
  searchdatebutton:boolean=false;
  Factures3wmTnd:any[]=[];
  firstn:any;
  p:number=1;
  factureToCreate={"bordereau":"","createdBy":"4125","dateFact":Date.now(),"id":"",
  "devise": "TND","direction":"","dossier": "3WM TND" ,"factname":"","fournisseur":"",
  "status":"en cours","montant":"","num_fact":"","num_po":"","objet":"",
  "pathname":"","periode_conso":"","structure":"","pieceJointe":""};

 factureToUpdate={"bordereau":"","createdBy":"4125","dateFact":Date.now(),"id":"",
 "devise": "TND","direction":"","dossier": "3WM TND" ,"factname":"","fournisseur":"",
 "status":"en cours","montant":"","num_fact":"","num_po":"","objet":"",
 "pathname":"","periode_conso":"","structure":"","pieceJointe":""};

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
      for(let i=0; i<data.length; i++){
        if(data[i].dossier=="3WM TND" )
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

        public onFileChanged(event) {
   
          //Select File
          this.selectedFile = event.target.files[0];
        
         
        }

        onUploadToUpdate() {
        
          const uploadImageData = new FormData();
          uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
         
          
          this.dataService.upload(uploadImageData).subscribe((response) => {
            console.log(response);
            this.factureToUpdate.pathname=response.body.toString();
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

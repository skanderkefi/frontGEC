import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../dataservice/data.service";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { IMultiSelectOption,IMultiSelectTexts, IMultiSelectSettings } from 'ngx-bootstrap-multiselect';



@Component({
  selector: 'app-bo-b3wm-devise',
  templateUrl: './bo-b3wm-devise.component.html',
  styleUrls: ['./bo-b3wm-devise.component.css']
})
export class BoB3wmDeviseComponent implements OnInit {

 
  usersMatriculeAndName:string[];
  Factures3wmTnd:any[]=[];


  firstn:any;
  Bordereaux:any[];
  Bordereaux3wmDevise:any[]=[];
  bordereauToCreate={"createdAt":Date.now(),"createdBy":"4125","folder":"","id":"",
  "nature":"3WM","natureRaff":"DEVISE","reference":"BOF/3WM-DEVISE/","sentAt":"","sentBy":"",
  "status":"en cours","updatedAt":Date.now()};
  p:number=1;


  users: any[]=[];
// Default selection
optionsModel: number[];

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

// Labels / Parents
myOptions: IMultiSelectOption[]=[];




  constructor(public dataService:DataService) { 
    
  }

  ngOnInit(): void {
      this.showUser();
     this.showBordereaux();
    // this.remplirOPtions();
     
    
  } 

  onChange() {
    console.log(this.optionsModel);
}

  showBordereaux(){
    this.dataService.showBordereau3wm().subscribe((data: any[])=>{
      for(let i=0; i<data.length; i++){
        if(data[i].natureRaff=="DEVISE" )
        this.Bordereaux3wmDevise[i]=data[i];
      }
      for(let i=0; i<this.Bordereaux3wmDevise.length; i++){
        if(this.Bordereaux3wmDevise[i]==null)
        this.Bordereaux3wmDevise.splice(i,1)
      }
      for(let i=0; i<this.Bordereaux3wmDevise.length; i++){
        if(this.Bordereaux3wmDevise[i]==null)
        this.Bordereaux3wmDevise.splice(i,1)
      }
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
        this.Bordereaux3wmDevise=this.Bordereaux3wmDevise.filter(res=>{
          return res.createdBy.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
        })
      }
    }

    exportData(tableId: string) {
      this.dataService.exportToFile("file", tableId);
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
  for(let i=0; i<this.Bordereaux3wmDevise.length; i++){
    if(this.Bordereaux3wmDevise[i].id==id)
    this.Bordereaux3wmDevise[i].status="envoyé"
    this.dataService.updateBord(this.Bordereaux3wmDevise[i]).subscribe((msg: any[])=>{
      console.log(msg);
    });
  }
  location.reload();

}


   
showFacture(){
  this.dataService.showFacture3wm().subscribe((data: any[])=>{
    console.log(data);
    for(let i=0; i<data.length; i++){
      if(data[i].devise=="DEVISE" )
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


  showUser(){
    this.dataService.searchMatAndPwd().subscribe((data: any[])=>{
      
      this.users=data;
      console.log("users");
      console.log(this.users);
      
    })
   

  }

  remplirOPtions(){
    
    for(let i=0;i<this.users.length;i++){
      this.myOptions.push({ id: i, name: this.users[i].name })
      
     }
   
     console.log("options");
     console.log(this.myOptions);
     
      

  }


  

  

}
 
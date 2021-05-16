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
  "status":"","updatedAt":Date.now(),"toAp":""};
  bordereauToUpdate={"createdAt":Date.now(),"createdBy":"4125","folder":"","id":"",
  "nature":"3WM","natureRaff":"DEVISE","reference":"BOF/3WM-DEVISE/","sentAt":"","sentBy":"",
  "status":"","updatedAt":Date.now(),"toAp":""};

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
    checkAll: 'tous sélectionnés',
    uncheckAll: 'Tout déselectionner',
    checked: 'Agent sélectionné',
    checkedPlural: 'Agents sélectionnés',
    searchPlaceholder: 'Trouver',
    searchEmptyResult: 'Rien trouvé...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Selectionner',
    allSelected: 'tous sélectionnés',
};

// Labels / Parents
myOptions: IMultiSelectOption[]=[];




  constructor(public dataService:DataService) { 
    
  }

  ngOnInit(): void {
      this.showUsers();
     this.showBordereaux();
     this.showFacture();
     
    
  } 

  onChange() {
    
  //   for(let i=0;i<this.optionsModel.length;i++){
  //   this.senttoap=this.senttoap+this.optionsModel[i].toString()+",";
  // }
  // this.bordereauToUpdate.toAp=this.senttoap;
  // this.dataService.updateBord(this.bordereauToUpdate);
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

envoyerBordereau(){

  // collect the matricule of ap who will be able to see factures
let sentToAp:string;
  for(let i=0;i<this.optionsModel.length;i++){
    sentToAp=sentToAp+this.optionsModel[i].toString()+",";
  }
  

  //update bordereau "status" & "toAp" attributes : 
 
  this.bordereauToUpdate.status="sent";
  this.bordereauToUpdate.toAp=sentToAp.slice(0,-1);

  this.dataService.updateBord(this.bordereauToUpdate).subscribe((msg: any[])=>{
      console.log(msg);
    });
  

    //set factures status to "sent"
  for (let i=0;i<this.Factures3wmTnd.length;i++){
    this.Factures3wmTnd[i].status="sent";
    this.Factures3wmTnd[i].status=sentToAp.slice(0,-1);
    this.Factures3wmTnd[i].dateEnvoieAuAp=this.getToday();

    this.dataService.updateFacture3wm(this.Factures3wmTnd[i]).subscribe((msg: any[])=>{
      console.log(msg);
    });
  }

  
 
}


   
  showFacture(){
    this.dataService.showFacture3wm().subscribe((data: any[])=>{
      console.log(data);
      let j=0;
      for(let i=0; i<data.length; i++){
  
        if(data[i].dossier=="3WM DEVISE"){
  
          this.Factures3wmTnd[j]=data[i];
  
        j++;
      }}
      console.log("fact3wm");
      
      console.log(this.Factures3wmTnd);
    })
    
}

  showUsers(){
    this.dataService.searchMatAndPwd().subscribe((data: any[])=>{
      
      this.users=data;
      console.log("users");
      console.log(this.users);
      
    })

  }

  showUserModal(bord){
    this.bordereauToUpdate=bord;
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
 
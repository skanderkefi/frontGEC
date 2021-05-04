import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../dataservice/data.service";
import {Fournisseur} from './../../../models/fournisseur.model'
 

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  importContacts: Fournisseur[] = [];
  exportContacts: Fournisseur[] = [];
   data;
   insertButton:boolean=false;


  Fournisseurs:any[];
  firstn:any;
  p:number=1;
  fournisseurToUpdate={"iderp":"","name":"","categorie":"","idFiscale":"","adresse":"",
  "nationnalite":"","createdBy":"","createdAt":"","updatedAt":""};
  fournisseurToCreate={"iderp":"","name":"","categorie":"","idFiscale":"","adresse":"",
  "nationnalite":"","createdBy":"","createdAt":Date.now(),"updatedAt":""}


  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.showFournisseur();
  }

  showFournisseur(){
    
    this.dataService.showfournisseurs().subscribe((data: any[])=>{
      console.log(data);
      this.Fournisseurs = data;
    })  
    } 

    Search(){
      if(this.firstn ==""){
        this.ngOnInit();
      }else if(this.firstn[0]>=0 && this.firstn[0]<=10){
        this.Fournisseurs=this.Fournisseurs.filter(res=>{
          return res.createdBy.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
        })
      }else{
        this.Fournisseurs=this.Fournisseurs.filter(res=>{
          return res.name.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
        })
      }
    }

    key: string='id';
  reverse: boolean=false;
  sort(key){
    this.key=key;
    this.reverse= !this.reverse;
  }



  deleteFournisseur(id){
    console.log(id);
    this.dataService.deleteFournisseur(id).subscribe((msg: any[])=>{
      console.log(msg);
    }) 
    location.reload();
}


updateFournisseur(){
  this.dataService.updateFournisseur(this.fournisseurToUpdate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
  location.reload();
}

fournisseurModal(fournisseur){
this.fournisseurToUpdate=fournisseur;
}

createFournisseur(){
  this.dataService.createFournisseur(this.fournisseurToCreate).subscribe((msg: any[])=>{
    console.log(msg);
    
  }) 
  location.reload();
}


//Excel file
onFileChange(evt: any) {
  this.insertButton=true;
  const target: DataTransfer = <DataTransfer>(evt.target);
  if (target.files.length !== 1) throw new Error('Cannot use multiple files');

  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {

    const bstr: string = e.target.result;
     this.data = <any[]>this.dataService.importFromFile(bstr);

    const header: string[] = Object.getOwnPropertyNames(new Fournisseur());



  };

  
  reader.readAsBinaryString(target.files[0]);

}

insertAll(){
this.insertButton=false;
console.log("data :")
console.log(this.data);
this.data.shift();
this.data.forEach(fourn=>{
this.fournisseurToCreate.iderp=fourn[0];
this.fournisseurToCreate.name=fourn[1];
this.fournisseurToCreate.categorie=fourn[2]
this.fournisseurToCreate.idFiscale=fourn[3]
this.fournisseurToCreate.adresse=fourn[4]
this.fournisseurToCreate.nationnalite=fourn[5]
this.fournisseurToCreate.createdBy=fourn[6]
console.log(this.fournisseurToCreate); 
this.createFournisseur();
}

)
}


} 

import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../dataservice/data.service";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-bofacletrdevise',
  templateUrl: './bofacletrdevise.component.html',
  styleUrls: ['../../facture.css']
})
export class BofacletrdeviseComponent implements OnInit {

  Factures3wmTnd:any[]=[];
  firstn:any;
  p:number=1;
  factureToCreate={"bordereau":"","created_by":"4125","dateFact":Date.now(),"id":"",
  "devise": "", "direction":"","dossier": "LETTRE CRÉDIT DEVISE" ,"factname":"","fournisseur":"",
  "status":"en cours","montant":"","numFacture":"","num_po":"","objet":"",
  "pathname":"","periode_conso":"","structure":"","createdAt":Date.now(),"credit":"","destinataire":""
   ,"datereception":"","echeance":"","pathPdf":"","typeFin":"","updatedAt":""};

 factureToUpdate={"bordereau":"","created_by":"4125","dateFact":Date.now(),"id":"",
 "devise": "", "direction":"","dossier": "LETTRE CRÉDIT DEVISE" ,"factname":"","fournisseur":"",
 "status":"en cours","montant":"","numFacture":"","num_po":"","objet":"",
 "pathname":"","periode_conso":"","structure":"","createdAt":Date.now(),"credit":"","destinataire":""
  ,"datereception":"","echeance":"","pathPdf":"","typeFin":"","updatedAt":""};


 
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
    this.dataService.showFactureLettre().subscribe((data: any[])=>{
      console.log(data);
      for(let i=0; i<data.length; i++){
        if(data[i].dossier=="LETTRE CRÉDIT DEVISE" )
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
         this.dataService.createFactureLettre(this.factureToCreate).subscribe((msg: any[])=>{
        console.log(msg);
      }) 
      location.reload(); 

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
          this.dataService.updateFactureLettre(this.factureToUpdate).subscribe((msg: any[])=>{
            console.log(msg);
          }) 
          location.reload(); 

        }

        deleteFacture(id){
          console.log(id);
          this.dataService.deleteFactureLettre(id).subscribe((msg: any[])=>{
            console.log(msg);
          })
          location.reload(); 
        }


}

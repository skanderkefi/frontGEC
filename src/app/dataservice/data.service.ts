import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import  {HttpClient, HttpRequest, HttpHeaders, HttpEvent} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import * as XLSX from 'xlsx';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  
  private user = new BehaviorSubject<any>("1111");
  changeState(myChange) {
    this.user.next(myChange);
}

getState() {
    return this.user.asObservable();
}


//get & set de la matricule lors du login pour que l'on puisse determiner l'user

private matricule = new BehaviorSubject<any>("1111");
matriculeChangeState(myChange) {
  this.matricule.next(myChange);
}

getMatriculeState() {
  return this.matricule.asObservable();
}


  constructor(private httpClient: HttpClient) { }

                    //  USERS                     
   login(user) {
    return this.httpClient.post('http://localhost:8080/Login/connect',user)
        .toPromise();
}
                     
  showUsers(){
      return this.httpClient.get('http://localhost:8080/Admin/show');
  
  }

  deleteUser(id){
    console.log(id);
    return this.httpClient.delete('http://localhost:8080/Admin/deletebyid/'+id);
 }

 updateUser(user){
   return this.httpClient.put('http://localhost:8080/Admin/Update',user);

 }

 createUser(user){
  return this.httpClient.post('http://localhost:8080/Admin/create',user);

}

searchUser(matricule){
  return this.httpClient.get('http://localhost:8080/Admin/search/'+matricule);
}

searchMatAndPwd(){
  return this.httpClient.get('http://localhost:8080/Admin/showmatandpwd');
}



                    //FACTURES


          //3wm
  showFacture3wm(){
    return this.httpClient.get('http://localhost:9009/FacturesDisplay/show3wm');
  }

  deleteFacture3wm(id){
    console.log(id);
    return this.httpClient.delete('http://localhost:9009/DeleteFactures/3wm/'+id);
 }

 updateFacture3wm(facture){
   return this.httpClient.put('http://localhost:9009/updateFacture/3wm',facture);

 }

 createFacture3wm(facture){
  return this.httpClient.post('http://localhost:9009/CreateFactures/3wm',facture);

}

createObject(objet){
  return this.httpClient.post('http://localhost:9009/CreateFactures/objet',objet);

}

createPiece(piece){
  return this.httpClient.post('http://localhost:9009/CreateFactures/piece',piece);

}


showObjects(){
  return this.httpClient.get('http://localhost:9009/FacturesDisplay/objects');
}

showPieces(){
  return this.httpClient.get('http://localhost:9009/FacturesDisplay/pieces');
}





  //remp
  showFactureFdRemp(){
    return this.httpClient.get('http://localhost:9009/FacturesDisplay/showfdremp');
  }

  deleteFactureFdRemp(id){
    console.log(id);
    return this.httpClient.delete('http://localhost:9009/DeleteFactures/fdremp/'+id);
 }

 updateFactureFdRemp(facture){
   return this.httpClient.put('http://localhost:9009/updateFacture/fdremp',facture);

 }

 createFactureFdRemp(facture){
  return this.httpClient.post('http://localhost:9009/CreateFactures/fdremp',facture);

}




  //fin
  showFactureFin(){
    return this.httpClient.get('http://localhost:9009/FacturesDisplay/showfctfin');
  }

  deleteFactureFin(id){
    console.log(id);
    return this.httpClient.delete('http://localhost:9009/DeleteFactures/fctfin/'+id);
 }

 updateFactureFin(facture){
   return this.httpClient.put('http://localhost:9009/updateFacture/fctfin',facture);

 }

 createFactureFin(facture){
  return this.httpClient.post('http://localhost:9009/CreateFactures/fctfin',facture);

}
  


  //fisc

  showFactureFisc(){
    return this.httpClient.get('http://localhost:9009/FacturesDisplay/showfctfisc');
  }


  deleteFactureFisc(id){
    console.log(id);
    return this.httpClient.delete('http://localhost:9009/DeleteFactures/fctfisc/'+id);
 }

 updateFactureFisc(facture){
  return this.httpClient.put('http://localhost:9009/updateFacture/fctfisc',facture);

 }

 createFactureFisc(facture){
  return this.httpClient.post('http://localhost:9009/CreateFactures/fctfisc',facture);

}


  //lettre 
  showFactureLettre(){
    return this.httpClient.get('http://localhost:9009/FacturesDisplay/showfctlettre');
  }

  deleteFactureLettre(id){
    console.log(id);
    return this.httpClient.delete('http://localhost:9009/DeleteFactures/fctlettre/'+id);
 }

 updateFactureLettre(facture){
   return this.httpClient.put('http://localhost:9009/updateFacture/lettre',facture);

 }

 createFactureLettre(facture){
  return this.httpClient.post('http://localhost:9009/CreateFactures/lettre',facture);

}
  

  //op
  showFactureOp(){
    return this.httpClient.get('http://localhost:9009/FacturesDisplay/showfctop');
  }

  deleteFactureOp(id){
    console.log(id);
    return this.httpClient.delete('http://localhost:9009/DeleteFactures/fctop/'+id);
 }

 updateFactureOp(facture){
   return this.httpClient.put('http://localhost:9009/updateFacture/op',facture);

 }

 createFactureOP(facture){
  return this.httpClient.post('http://localhost:9009/CreateFactures/op',facture);

}


  //comdist
  showFactureComdist(){
    return this.httpClient.get('http://localhost:9009/FacturesDisplay/showfctcomdist');
  }

  deleteFactureCmd(id){
    console.log(id);
    return this.httpClient.delete('http://localhost:9009/DeleteFactures/fctcomdist/'+id);
 }

 updateFacturecmd(facture){
   return this.httpClient.put('http://localhost:9009/updateFacture/comdist',facture);

 }

 createFacturecmd(facture){
  return this.httpClient.post('http://localhost:9009/CreateFactures/comdist',facture);

}


                         //BORDEREAU
//show
   showBordereau3wm(){
     return this.httpClient.get('http://localhost:8082/BordereauFind/show3wm');
         } 

 

  //  showBordereauVentDirect(){
  //    return this.httpClient.get('http://localhost:8082/BordereauFind/showall');

  //      }

  
                
  
       

       deleteBord(id){
        console.log(id);
        return this.httpClient.delete('http://localhost:8082/BordereauDelete/deletebyid/'+id);
     }
    
     updateBord(b){
       return this.httpClient.put('http://localhost:8082/BordereauUpdate/Update',b);
    
     }
    
     createBord(b){
      return this.httpClient.post('http://localhost:8082/BordereauCreate/create',b);
    
    }
    

             //FOURNISSEURS

  getFournisseur(po){
      console.log(po);
      return this.httpClient.get('http://localhost:9083/Fournisseur/getbypo/'+po);
            }

  showfournisseurs(){
     return this.httpClient.get('http://localhost:9083/Fournisseur/showall');
   }


   deleteFournisseur(id){
    console.log(id);
    return this.httpClient.delete('http://localhost:9083/Fournisseur/deletebyid/'+id);
 }

 updateFournisseur(fournisseur){
   return this.httpClient.put('http://localhost:9083/Fournisseur/Update',fournisseur);

 }

 createFournisseur(fournisseur){
  return this.httpClient.post('http://localhost:9083/Fournisseur/create',fournisseur);

}





//images


 //Make a call to the Spring Boot Application to save the image
 upload(uploadImageData){
 return this.httpClient.post('http://localhost:8080/Admin/upload', uploadImageData, { observe: 'response' })
 
}

retrieveImage(id){
  return this.httpClient.get('http://localhost:8080/Admin/getImage/' + id);
}



public importFromFile(bstr: string): XLSX.AOA2SheetOpts {
  /* read workbook */
  const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

  /* grab first sheet */
  const wsname: string = wb.SheetNames[0];
  const ws: XLSX.WorkSheet = wb.Sheets[wsname];
  
  /* save data */
  const data = <XLSX.AOA2SheetOpts>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
  
  return data;
}


public exportToFile(fileName: string, element_id: string) {
  if (!element_id) throw new Error('Element Id does not exists');

  let tbl = document.getElementById(element_id);
  let wb = XLSX.utils.table_to_book(tbl);
  XLSX.writeFile(wb, fileName + '.xlsx');
}


}
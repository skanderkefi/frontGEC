import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../dataservice/data.service";


@Component({
  selector: 'app-bordereau3wmtnd',
  templateUrl: './bordereau3wmtnd.component.html',
  styleUrls: ['./bordereau3wmtnd.component.css']
})
export class Bordereau3wmtndComponent implements OnInit {

  Bordereaux:any[];
  firstn:any;
  p:number=1;
  bordereauToUpdate={"id":"","reference":"","nature":"3WM-TND","status":"","folder":"","sentBy":"","createdBy":""};

  bordereauToCreate={"id":"","reference":"","nature":"3WM-TND","status":"","folder":"","sentBy":"","createdBy":""};



  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.showBordereaux();
  }

  showBordereaux(){
    this.dataService.showBordereau3wm().subscribe((data: any[])=>{
      console.log(data);
      this.Bordereaux = data;
    })  
    } 

    Search(){
      if(this.firstn ==""){
        this.ngOnInit();
      }else if(this.firstn[0]>=0 && this.firstn[0]<=10){
        this.Bordereaux=this.Bordereaux.filter(res=>{
          return res.createdBy.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
        })
      }else{
        this.Bordereaux=this.Bordereaux.filter(res=>{
          return res.status.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
        })
      }
    }

    key: string='id';
  reverse: boolean=false;
  sort(key){
    this.key=key;
    this.reverse= !this.reverse;
  }

  deleteBord(id){
    console.log(id);
    this.dataService.deleteBord(id).subscribe((msg: any[])=>{
      console.log(msg);
    }) 
}


updateBord(){
  this.dataService.updateBord(this.bordereauToUpdate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}

bordereauModal(b){
this.bordereauToUpdate=b;
}

createBordereau(){
  this.dataService.createBord(this.bordereauToCreate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}


}

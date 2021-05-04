import { Component, OnInit } from '@angular/core';
import {DataService} from "../dataservice/data.service";
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-agent-bo',
  templateUrl: './agent-bo.component.html',
  styleUrls: ['./agent-bo.component.css']
})
export class AgentBoComponent implements OnInit {

  buttonshowtime:boolean=false
  testancienmdp:Boolean=true;
  testnewpwd:boolean=false;
  changepassword={"ancien":"","nouveau":"","nouveau2":""};
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  completedImage;
  Users:any[];
  connectedUser;
  selectedFile: File;
  filesizerespected:boolean=true;
  notImageToUpdate:boolean=false;
  uploadedSuccessfullyToUpdate:boolean=false;






  constructor(public dataService : DataService,
    public router : Router ) { }

  ngOnInit(): void {
      this.whosconnected()
    
  }


   //Gets called when the user clicks on retieve image button to get the image from back end
   getImage(imageId) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.dataService.retrieveImage(imageId)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.completedImage = 'data:image/jpeg;base64,' + this.base64Data;

        }
      );
  }

  whosconnected(){
    
      this.dataService.showUsers().subscribe((data: any[])=>{
        this.Users = data;
        
        for(let i=0;i<this.Users.length;i++){
          if (this.Users[i].isactive=="1" && this.Users[i].profil=="BOF"){
            this.connectedUser=this.Users[i];
            this.getImage(this.Users[i].image)
          }
        }
        })
      }


      public onFileChanged(event) {
   
        //Select File
        this.selectedFile = event.target.files[0];
        if(this.selectedFile.size>1048576){
          this.filesizerespected=false;
        }
       
      }



onUploadToUpdate() {
  if(this.notImageToUpdate==false){
  this.uploadedSuccessfullyToUpdate=true;}
  //FormData API provides methods and properties to allow us easily prepare form data 
  // to be sent with POST HTTP requests.

  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
 
  
  if(!this.notImageToUpdate){
  this.dataService.upload(uploadImageData).subscribe((response) => {
    this.connectedUser.image=response.body.toString();
    console.log(this.connectedUser)
    if (response.status === 200) {
      this.uploadedSuccessfullyToUpdate=true;
    } else if (response.status !=500){
      this.uploadedSuccessfullyToUpdate=true;

    }else if (response.status ===500){

    }
    else{
      console.log("erreur jcp!")
    }
  }
  );
}
}

 
updateUser(){
  this.dataService.updateUser(this.connectedUser).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
  location.reload();
}

disconnected(){
  
  this.connectedUser.isactive=0;
  this.dataService.updateUser(this.connectedUser).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}


onSearchupdateChange(searchValue: string): void {  
  
  if(searchValue=="" ){
    this.testancienmdp=true;
  }
  if(searchValue.length>0 && searchValue!=this.connectedUser.password && this.connectedUser.password.length
    <=searchValue.length){
    this.testancienmdp=false;
  }
     
   if(this.changepassword.ancien==this.connectedUser.password){
    this.buttonshowtime=true
    this.testancienmdp=true;
  }


  }


  onSearchupdateChangenew(searchValue: string){

    if(this.changepassword.nouveau==searchValue){
      this.buttonshowtime=true
    }
    if(searchValue==""){
      this.testnewpwd=true;
    }
    if(this.changepassword.nouveau.substr(0,searchValue.length)==searchValue){
      this.testnewpwd=true;
    }else{
      this.testnewpwd=false;
    }


    
  }
}


import { Component, OnInit } from '@angular/core';
import {DataService} from "../../dataservice/data.service";


@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  fromlogin:any={"matricule":"","completedImage":"","profil":""};
  userToCreate:any={"created_by":"","direction":"","email":"","id":"","image":"","isactive":"","last_login_ip":"",
  "matricule":"","name":"","password":"","phone":"","profil":""};
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
  object:any={"id":"","nom":""};
  piece:any={"id":"","nom":""};



  constructor(public dataService : DataService) { }

  ngOnInit(): void {
    this.whosconnected()

      this.dataService.getMatriculeState().subscribe(res=>(this.fromlogin.matricule=res));
    this.dataService.searchUser(this.fromlogin.matricule).subscribe(res=>{
      this.userToCreate=res;
      this.getImage(this.userToCreate.image);
      this.fromlogin.profil=this.userToCreate.profil;
      console.log("connected as :");
      console.log(this.fromlogin);

    })
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



  public onFileChanged(event) {
   
    //Select File
    this.selectedFile = event.target.files[0];
    if(this.selectedFile.size>1048576){
      this.filesizerespected=false;
    }
   
  }


  whosconnected(){
    
    this.dataService.showUsers().subscribe((data: any[])=>{
      this.Users = data;
      
      for(let i=0;i<this.Users.length;i++){
        if (this.Users[i].isactive=="1" && this.Users[i].profil=="Admin"){
          this.connectedUser=this.Users[i];
          this.getImage(this.Users[i].image);
          this.dataService.changeState(this.Users[i].matricule);
        }
      }
      })

      
    }

    createObject(){
      this.dataService.createObject(this.object).subscribe((msg: any[])=>{
        console.log(msg);
      }) 
       location.reload();
    }

    createPiece(){
      this.dataService.createPiece(this.piece).subscribe((msg: any[])=>{
        console.log(msg);
      }) 
      location.reload();
    }

}

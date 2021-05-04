import { Component, OnInit } from '@angular/core';
import {DataService} from "../../dataservice/data.service";
import {User} from './../../models/user.model'
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
   



  filesizerespected:boolean=true;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
 
  clicked=0;
  firstn:any;
  Users:any[];
  p:number=1; 
  id=1;
  deleteFromBackMessage:any;
  isDisplayed=true;
  userToUpdate={"created_by":"","direction":"","email":"","id":"","image":"","isactive":"","last_login_ip":"",
  "matricule":"","name":"","password":"","phone":"","profil":"",};

  userToCreate={"created_by":"","direction":"","email":"","id":"","image":"","isactive":"","last_login_ip":"",
  "matricule":"","name":"","password":"","phone":"","profil":""};
  userImagesIds=[];
  userCompletesImages=[];
  matriculeVide:boolean=false;
  uploadedSuccessfullyToCreate:boolean=false;
  notImageToCreate:boolean=false;
  uploadedSuccessfullyToUpdate:boolean=false;
  notImageToUpdate:boolean=false;
  connectedUser;



  constructor(public dataService:DataService,
    public router : Router ,
    public activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
     this.showUsers();
  }





  Search(){
    if(this.firstn ==""){
      this.ngOnInit();
    }else if(this.firstn[0]>=0 && this.firstn[0]<=10){
      this.Users=this.Users.filter(res=>{
        return res.matricule.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
      })
    }else{
      this.Users=this.Users.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.firstn.toLocaleLowerCase());
      })
    }
  }

  showUsers(){
    this.dataService.showUsers().subscribe((data: any[])=>{
      this.Users = data;
      data.forEach(user=>{ 
         this.userImagesIds.push(user.image);
        })
        this.userImagesIds.forEach(idImage=>{
          this.getImage(idImage);})


     

      })}
      
  

  key: string='id';
  reverse: boolean=false;
  sort(key){
    this.key=key;
    this.reverse= !this.reverse;
  }


  deleteUser(id){
    console.log(id);
    this.dataService.deleteUser(id).subscribe((msg: any[])=>{
      this.deleteFromBackMessage = msg;
    })
    location.reload(); 
}


updateUser(){
  this.dataService.updateUser(this.userToUpdate).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
  location.reload();
}

userModal(user){
this.userToUpdate=user;
}

createUser(){
  this.dataService.createUser(this.userToCreate).subscribe(
    (response) => {
      console.log("hello ");
  }) 
  location.reload();

}



//Gets called when the user selects a file
public onFileChanged(event) {
   

  //Select File
  this.selectedFile = event.target.files[0];
  if(this.selectedFile.size>1048576){
    this.filesizerespected=false;
  }
  if(this.userToCreate.matricule===""){
    this.matriculeVide=true;
  }
}

//Gets called when the user wants to create image
onUploadToCreate() {
  if(!this.notImageToCreate){
  this.uploadedSuccessfullyToCreate=true;}
  //FormData API provides methods and properties to allow us easily prepare form data 
  // to be sent with POST HTTP requests.

  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  if(this.selectedFile.name.toLocaleLowerCase().indexOf("png")==-1 &&this.selectedFile.name.toLocaleLowerCase().indexOf("jpg")==-1
  &&this.selectedFile.name.toLocaleLowerCase().indexOf("jpeg")==-1 && this.selectedFile.name.indexOf("PNG")==-1){
    this.notImageToCreate=true;
  }
  
  if(!this.notImageToCreate){
  this.dataService.upload(uploadImageData).subscribe((response) => {
    this.userToCreate.image=response.body.toString();
    
    if (response.status === 200) {
      this.message = 'Image uploaded successfully';
      this.uploadedSuccessfullyToCreate=true;
    } else if (response.status !=500){
      this.message = 'upload button disparaitera';
      this.uploadedSuccessfullyToCreate=true;

    }else if (response.status ===500){
      this.message = 'Image uploaded successfully';

    }
    else{
      console.log("erreur jcp!")
    }
  }
  );
}
}

//called when user wants to update image

onUploadToUpdate() {
  console.log(this.selectedFile);
  if(this.notImageToUpdate==false){
  this.uploadedSuccessfullyToUpdate=true;}
  //FormData API provides methods and properties to allow us easily prepare form data 
  // to be sent with POST HTTP requests.

  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  if(this.selectedFile.name.toLocaleLowerCase().indexOf("png")==-1 &&this.selectedFile.name.toLocaleLowerCase().indexOf("jpg")==-1
  &&this.selectedFile.name.toLocaleLowerCase().indexOf("jpeg")==-1 && this.selectedFile.name.indexOf("PNG")==-1) {
    this.notImageToUpdate=true;
  }
  
  if(!this.notImageToUpdate){
  this.dataService.upload(uploadImageData).subscribe((response) => {
    this.userToUpdate.image=response.body.toString();
    
    if (response.status === 200) {
      this.message = 'Image uploaded successfully';
      this.uploadedSuccessfullyToUpdate=true;
    } else if (response.status !=500){
      this.message = 'upload button disparaitera';
      this.uploadedSuccessfullyToUpdate=true;

    }else if (response.status ===500){
      this.message = 'Image uploaded successfully';

    }
    else{
      console.log("erreur jcp!")
    }
  }
  );
}
}

    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage(imageId) {
      //Make a call to Sprinf Boot to get the Image Bytes.
      this.dataService.retrieveImage(imageId)
        .subscribe(
          res => {
            this.retrieveResonse = res;
            this.base64Data = this.retrieveResonse.picByte;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            this.userCompletesImages.push(this.retrievedImage);

          }
        );
    }


   


   

    

  

}

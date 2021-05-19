import { Component, OnInit } from '@angular/core';
import {DataService} from '../../dataservice/data.service'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login={"matricule":"","mdp":""}
  user:any


  constructor(   public dataService:DataService  ,
    public router : Router ,
    public activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
  }

  loginF(){
    this.dataService.matriculeChangeState(this.login.matricule);

    this.dataService.login(this.login)
    .then(res => {
      this.user=res;
      if(this.user.profil=="Admin"){
        this.updateUser();
      this.router.navigate(['/admin']);
      console.log("u r logged in !");
    }else if (this.user.profil=="BOF"){
      this.updateUser();
      this.router.navigate(['/boFournisseur']);
      console.log("u r logged in !");
    }else if (this.user.profil=="AP"){
      this.updateUser();
      this.router.navigate(['/cmpt']);
      console.log("u r logged in !");
    }
    else if (this.user.profil=="TRESO"){
      this.updateUser();
      this.router.navigate(['/Tresostegtnd']);
      console.log("u r logged in !");
    }
  }) .catch((err)=>{
    this.router.navigate(['/']);
    console.log("u r not logged in ! ");
  })


}

updateUser(){
  this.user.isactive=1;
  this.dataService.updateUser(this.user).subscribe((msg: any[])=>{
    console.log(msg);
  }) 
}

}
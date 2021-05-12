import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  envoieApNotNull:boolean=false;
  refusApNotNull:boolean=true;
  validationApNotNull:boolean=true;
  envoietrésoNotNull:boolean=true;
  refustresoNotNull:boolean=true;
  validationtresoNotNull:boolean=true;


  datereception="1/1/2020";
  dateenvoieAp="2/1/2020";
  daterefusAP="3/1/2020";
  datevalidationAp="4//1/2020";
  dateenvoietreso="5/1/2020";
  daterefustréso="6/1/2020";
  datevalidationtréso="7/1/2020";
  constructor() { }

  ngOnInit(): void {
  }

} 

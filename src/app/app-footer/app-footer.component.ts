import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'pokemon-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

 
 currentYear: any;

  constructor() { }

  ngOnInit() {
   this.currentYear = new Date();
  }

}

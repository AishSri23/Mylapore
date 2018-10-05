import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show:boolean=false;
  Onhover(id: string):void{
   this.show=true;
    }
    OnOut(id: string):void{
      this.show=false;
       }
  }


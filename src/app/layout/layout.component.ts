import {Component,ViewChild} from '@angular/core'
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
  })

export class LayoutComponent
{
  @ViewChild(AppComponent)
  private appComponent:AppComponent;
  
  
  onmouseover(id:string):void{
    console.log("hi");
this.appComponent.Onhover(id);
  }
  onmouseout(id:string):void{
    console.log("hi1");
    this.appComponent.OnOut(id);
  }
}
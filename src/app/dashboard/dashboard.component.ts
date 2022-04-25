import { AfterViewInit, Component, OnInit ,ViewChild} from '@angular/core';
import {LayoutModule , BreakpointObserver} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
{MatSidenav}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {
img:string="../../../assets/contacts-64.png";
img2:string="../../../assets/medal.png";
public minDate: Date = new Date ("05/07/2015");
public maxDate: Date = new Date ("08/27/2030");
public value: Date = new Date ();
@ViewChild(MatSidenav)
 sidenav!: MatSidenav;
 sideBarOpen:boolean=true;
 menu=document.querySelector("#menu") as HTMLElement;
  constructor(private observer: BreakpointObserver) { 

  }
 ngAfterViewInit() {
    this.observer.observe(['(max-width: 1000px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
        this.menu.setAttribute("style","display:none;")
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
        document.querySelector("#menu")?.setAttribute("display","none");
      }
    });
  }
  ngOnInit(): void {
this.menu;
  }
  togglersidebar(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}

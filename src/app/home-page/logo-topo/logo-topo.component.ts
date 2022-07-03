import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-logo-topo',
  templateUrl: './logo-topo.component.html',
  styleUrls: ['./logo-topo.component.css']
})
export class LogoTopoComponent implements OnInit, AfterViewInit {
  show: boolean = false;
  constructor() { }
  ngAfterViewInit(): void {
      this.show = true;
  }

  ngOnInit(): void {

  }


}

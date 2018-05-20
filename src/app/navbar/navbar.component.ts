import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  setActive(menu) {
    console.log( $('#' + menu));
    $('a').removeClass('btn btn-primary');
    $('#' + menu).addClass('btn btn-primary');
  }
}

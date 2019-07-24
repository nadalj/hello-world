import { Component, OnInit } from '@angular/core';
import { nadalj } from '../nadalj';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  aboutStudent:nadalj={studentnumber:991498845,
    Name:'Daljot Singh',
    Campus:'Davis',
    LoginName:'nadalj',
    Title:'Assignment 3'
  }

  constructor() { }

  ngOnInit() {
  }

}

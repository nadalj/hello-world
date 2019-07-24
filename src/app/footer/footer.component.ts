import { Component, OnInit } from '@angular/core';
import { nadalj } from '../nadalj';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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

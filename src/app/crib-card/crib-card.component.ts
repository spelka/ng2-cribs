import { Component, OnInit, Input } from '@angular/core';
import { cribs } from '../data/cribs';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  //Accept a binding called "crib" and assign the passed in property to a local property called "crib" 
  @Input('crib') crib: any;
  constructor() { }

  ngOnInit() {
  }

}

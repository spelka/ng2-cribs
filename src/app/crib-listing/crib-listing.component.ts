import { Component, OnInit } from '@angular/core';
import { cribs } from './../data/cribs';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  //Assign imported cribs data into a local array variable named cribs
  cribs: Array<any> = cribs;

  constructor() { }

  ngOnInit() {
  }

}

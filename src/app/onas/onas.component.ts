import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';



@Component({
  selector: 'app-onas',
  templateUrl: './onas.component.html',
  styleUrls: ['./onas.component.scss']
})
export class OnasComponent implements OnInit {

  fbIcon = faFacebookSquare;
  pinIcon = faPinterest;
  tweetIcon = faTwitterSquare;
  
  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  
  lastPage() {
    this._location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-onas',
  templateUrl: './onas.component.html',
  styleUrls: ['./onas.component.scss']
})
export class OnasComponent implements OnInit {
  
  fbIcon = faFacebookSquare;
  pinIcon = faPinterest;
  tweetIcon = faTwitterSquare;
  
  constructor(private _location: Location, private _route: ActivatedRoute, // <-- Usefull
    private _router: Router,) { 
      
      
  }

  ngOnInit(): void {
  }

  pou(){
   let audio = new Audio();
    if (audio.played) {
      audio.pause();
      
    } 
    audio.src = "../../../assets/audio/pou_song.mp3";
    audio.load();
    audio.play();
  

  this.delay(30000).then(any=>{
     audio.pause();
  });
  }

  lastPage() {
    this._location.back();
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
  }

}

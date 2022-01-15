import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doporucene',
  templateUrl: './doporucene.component.html',
  styleUrls: ['./doporucene.component.scss']
})
export class DoporuceneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  bluncla(){
    console.log("Právě jsi našel tajný easter egg :)");
   let audio = new Audio(); 
    audio.src = "../../../assets/audio/čolek.webm";
    audio.load();
    audio.play();
 
  }
  daisy(){
    console.log("Právě jsi našel tajný easter egg :)");
   let audio = new Audio(); 
    audio.src = "../../../assets/audio/daisy.mp3";
    audio.load();
    audio.play();
 
  }
  koleso(){
    console.log("Právě jsi našel tajný easter egg :)");
   let audio = new Audio(); 
    audio.src = "../../../assets/audio/koleso.mp3";
    audio.load();
    audio.play();
 
  }

}

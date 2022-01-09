import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  
})
export class MainPageComponent implements OnInit {

    params:any;
    allRecept = true;
    filtrRecept = false;

  constructor(private _Activatedroute:ActivatedRoute) {
    this.params=this._Activatedroute.snapshot.paramMap.get("params");

    if(this.params){
      var values = JSON.parse(this.params);

      if(values.skill || values.cas_pripravy|| values.hodnoceni){
        this.allRecept = false;
        this.filtrRecept = true;
      
      console.log(this.params);
  }}
  }  

  ngOnInit(): void {
  }

  
}

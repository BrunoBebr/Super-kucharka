import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kategorie',
  templateUrl: './kategorie.component.html',
  styleUrls: ['./kategorie.component.scss']
  
})
export class KategorieComponent implements OnInit {

  filtr!: FormGroup;


  constructor(private _formBuilder: FormBuilder, private router: Router) {
  }  

  ngOnInit(): void {
    this.filtr = this._formBuilder.group({
      'skill': [""],
      'hodnoceni':[""],
      'cas_pripravy': [""]       
    });
    }

    filtrSearch(data:any){
      if(data.value.skill || data.value.hodnoceni || data.value.cas_pripravy){
      var values = JSON.stringify(data.value);
      console.log(values);
      
      this.router.navigate(['/hledat', values]);
      this.delay(10).then(any=>{
        
        window.location.reload();
      });
    }}


    async delay(ms: number) {
      await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
    }
  }
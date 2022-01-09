import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-kategorie',
  templateUrl: './kategorie.component.html',
  styleUrls: ['./kategorie.component.scss']
  
})
export class KategorieComponent implements OnInit {

  receptAddForm!: FormGroup;


  constructor(private _formBuilder: FormBuilder) {
  }  

  ngOnInit(): void {
    this.receptAddForm = this._formBuilder.group({
      'skill': new FormControl(""),
      'hodnoceni': new FormControl(""),
      'cas_pripravy': new FormControl("")       
    });
    };

  }
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Postup, Recepty } from '../interface';
import { ReceptyService } from '../service/recepty.service';
import {Location} from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-recept-detail',
  templateUrl: './recept-detail.component.html',
  styleUrls: ['./recept-detail.component.scss']
})
export class ReceptDetailComponent implements OnInit {
  public id?: string;
  isLinear = false;
  formGroup! : FormGroup;
  form!: FormArray;
  load = false;
  uploaded = false;
  uploadMessage = false;

  constructor(private activatedRoute: ActivatedRoute, private receptyService: ReceptyService, private _location: Location, private _formBuilder: FormBuilder,  breakpointObserver: BreakpointObserver) { 
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  recepty: Recepty[] = [];
  error = '';
  success = '';
  public reviews: any = '';
  kroky!:number;
  postup: Postup[] = [];

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
  //console.log(this.id);
  await this.getReceptId(this.id);
    
  this.load = true;
  if(this.uploaded = true){
    this.uploadMessage = true;
    this.delay(300).then(any=>{
      this.load = false;
      this.uploadMessage = false;
      
    });
  }
  }
  getReceptId(id : any): void {
    this.receptyService.getSpecific(id).subscribe(
      (data: Recepty[]) => {
        this.recepty = data;
        this.reviews = this.recepty[0]['hodnoceni'];
        
        console.log(this.recepty);
        this.success = 'successful retrieval of the list';
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
      
    );
    
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
}


  lastPage() {
    this._location.back();
  }
  krokyToArray(kroky:any){
    
    var objData = JSON.parse(kroky);
    console.log(objData);
     this.postup = objData;
    this.num = objData.length;
    return objData;
  }
  
  
 

  Arr = Array; //Array type captured in a variable
  num:number =1;

  stepperOrientation: Observable<StepperOrientation>;
}

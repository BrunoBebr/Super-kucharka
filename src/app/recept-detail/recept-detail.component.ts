import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Postup, Recepty } from '../interface';
import { ReceptyService } from '../service/recepty.service';
import {Location} from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {interval, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';

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
        
       // console.log(this.recepty);
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
    //console.log(objData);
     this.postup = objData;
    this.num = objData.length;
    return objData;
  }
  
  
 

  Arr = Array; //Array type captured in a variable
  num:number =1;

  stepperOrientation: Observable<StepperOrientation>;

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 100;
  bufferValue = 75;
  curSec: number = 0;
  isEnabled = false;
  zvoneni = 0;
  zrusitStopky = 0;
  audio = new Audio();
  shouldContinue = true;

  stopky(t:number){
    this.shouldContinue = true;
    this.zrusitStopky = 0;
    const time = t*60;
    
    
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      if(this.shouldContinue){
      this.value = 100 - sec * 100 / time;
      this.curSec = sec;
      this.isEnabled = true;
    }else{
      sub.unsubscribe();
      return;}

      if (this.curSec === time) {
        this.zvoneni = 1;
        this.zapnoutZvoneni();
        
       

        sub.unsubscribe();
      }
      
    });
  }
 
  zapnoutZvoneni(){
    
    this.audio.src = "../../../assets/audio/alarm.mp3";
    this.audio.load();
    this.audio.play();

  }

  zastavitZvoneni(){
    this.audio.pause();
    this.zvoneni = 0;
    this.value = 100;
    this.isEnabled = false;
  }
  zastavitStopky(){
    this.shouldContinue = false;
    this.value = 100;
    this.isEnabled = false;
    this.zrusitStopky = 1;
  }
  
}

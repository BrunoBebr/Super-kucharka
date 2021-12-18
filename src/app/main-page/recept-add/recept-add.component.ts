import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-recept-add',
  templateUrl: './recept-add.component.html',
  styleUrls: ['./recept-add.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class ReceptAddComponent implements OnInit {
  receptAddForm!: FormGroup;

  isLinear = false;
  formGroup!: FormGroup;
  form!: FormArray;
  postup!: any;
  
  
  //postup: FormArray | any[] | undefined;

  //currentStep = 0;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.receptAddForm = this._formBuilder.group({
      'zakladniUdaje': new FormGroup({
        'nazev': new FormControl("", Validators.required),
        'autor': new FormControl("", Validators.required),
        'obrazek': new FormControl(""),
        'poznamka': new FormControl("", Validators.required),        
      }),
     postup: this._formBuilder.array([this.initPostup()])   
    })
    
    
    this.formGroup = this._formBuilder.group({
      form : this._formBuilder.array([this.init()])
    }) 
    this.addItem();
  }

 initPostup(){
    return this._formBuilder.group({
        nazev: new FormControl("", Validators.required),
        cas: new FormControl("", Validators.required),
        obrazek: new FormControl(""),
        postup: new FormControl("", Validators.required)
    })
  }
  
  addItemPostup(stepper: MatStepper){
    this.postup = this.receptAddForm.get('postup') as FormArray;
    if(this.receptAddForm.status == "VALID"){
      this.postup.push(this.initPostup());
      stepper.next();
    }
    
  }

  removeItemPostup(){
   this.postup = this.receptAddForm.get('postup') as FormArray;
    if(this.postup.length != 1){
      this.postup.removeAt(this.postup.length - 1);
    }
   
    
  }

  removeElement(arr:any) {
    if(arr.length > 0)
      arr.length --;
    return arr
  };

  init(){
    return this._formBuilder.group({
      cont :new FormControl('', [Validators.required]),
    })
  }
  
  addItem(){
    this.form = this.formGroup.get('form') as FormArray;
    this.form.push(this.init());
  }


  getControls() {
    return (this.receptAddForm.get('zakladniUdaje') as FormGroup).controls;
 }
 nextItem(stepper: MatStepper){
  if(this.receptAddForm.status == "VALID"){
    stepper.next();
  } 
 }


 getControlsPostup() {
   console.log((this.receptAddForm.get('postup') as FormArray).controls);
  return (this.receptAddForm.get('postup') as FormArray).controls;
}
}


  



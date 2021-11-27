import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';

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
  //postup: FormArray | any[] | undefined;

  //currentStep = 0;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.receptAddForm = new FormGroup({
      'zakladniUdaje': new FormGroup({
        'nazev': new FormControl(null, Validators.required),
        'autor': new FormControl(null, Validators.required),
        'obrazek': new FormControl(null),
        'poznamka': new FormControl(null, Validators.required)
      }),
     // postup: this._formBuilder.array([this.init()])    
    })
    //this.addItem();
  }

 /* init(){
    return this._formBuilder.group({
        'nazev': new FormControl(null, Validators.required),
        'cas': new FormControl(null, Validators.required),
        'obrazek': new FormControl(null),
        'postup': new FormControl(null, Validators.required)
    })
  }
  
  addItem(){
    this.postup = this.receptAddForm.get('postup') as FormArray;
    this.postup.push(this.init());
  }*/
}

  



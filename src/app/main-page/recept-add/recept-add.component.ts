import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import {NgForm} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Recepty } from 'src/app/interface';
import { ReceptyService } from 'src/app/service/recepty.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface User {
  name: string;
}

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

  recepty: Recepty[] = [];
  error = '';
  success = '';

  isLinear = false;
  formGroup!: FormGroup;
  form!: FormArray;
  postup!: any;
  http: any;

  
  
  //postup: FormArray | any[] | undefined;

  //currentStep = 0;

  constructor(private _formBuilder: FormBuilder, private receptyService: ReceptyService) { }

  myControl = new FormControl();
  options: User[] = [{name: "0"}, {name: '1'},{name: '2'},{name: '3'},{name: '4'},{name: '5'},{name: '6'},{name: '7'},{name: '8'},{name: '9'}, {name: '10'},{name: '15'},{name: '20'},{name: '25'},{name: '30'},{name: '35'},{name: '40'},{name: '45'},{name: '50'},{name: '55'},{name: '60'},];
  filteredOptions: Observable<User[]> | undefined;

  ngOnInit(): void {
    this.getRecepty();
    this.receptAddForm = this._formBuilder.group({
      'zakladniUdaje': new FormGroup({
        'nazev': new FormControl("", Validators.required),
        'autor': new FormControl("", Validators.required),
        'obrazek': new FormControl(""),
        'suroviny': new FormControl("", Validators.required),
        'note': new FormControl("", Validators.required),
        'skill': new FormControl("", Validators.required), 
        'cas_pripravy': new FormControl("", Validators.required),        
      }),
     postup: this._formBuilder.array([this.initPostup()])   
    })
    
    
    this.formGroup = this._formBuilder.group({
      form : this._formBuilder.array([this.init()])
    }) 
    this.addItem();


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
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
  // console.log((this.receptAddForm.get('postup') as FormArray).controls);
  return (this.receptAddForm.get('postup') as FormArray).controls;
}

getRecepty(): void {
  this.receptyService.getAll().subscribe(
    (data: Recepty[]) => {
      this.recepty = data;
      this.success = 'Success in retrieving the list';
    },
    (err) => {
      console.log(err);
      this.error = err.message;
    }
  );
}

addRecept(receptAddForm: FormGroup) {
  this.resetAlerts();
//console.log("SEND " + JSON.stringify(receptAddForm.value));
  this.receptyService.store(receptAddForm.value).subscribe(
    
    (res: Recepty) => {
      // Update the list of cars
      this.recepty.push(res)
      //console.log("SENT " + JSON.stringify(receptAddForm.value));
      // Inform the user
      this.success = 'Created successfully';

      // Reset the form
      receptAddForm.reset();
    },
    (err) => (this.error = err.message)
  );
}

resetAlerts() {
  this.error = '';
  this.success = '';
}
submitted = false;

onSubmit() { this.submitted = true; }



curDate=new Date();
/* file upload */
     /* Variabe to store file data */
     filedata:any;
    /* File onchange event */
    fileEvent(e : any){
        this.filedata = e.target.files[0];
    }
    /* Upload button functioanlity */
    onSubmitform() {
       
      var imageid : any = (document.getElementById("main-image") as HTMLInputElement).value;
     console.log(imageid);
     /* var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append(imageid, this.filedata);
      
      this.http.post('https://bebrbr20.sps-prosek.cz/WEB/SQL/api/recepty/upload-image.php', myFormData, {
      headers: headers
      }).subscribe((data: any) => {
       //Check success message
       console.log(data);
      });  
   */
  }
/* file upload */
}




  



import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import {NgForm} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HlavniFotka, Img, Recepty } from 'src/app/interface';
import { ReceptyService } from 'src/app/service/recepty.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PravidlaVytvoreniReceptuDialog } from '../recept-card/recept-card.component';
import { MatDialog } from '@angular/material/dialog';
import {Location} from '@angular/common';
import { Router } from '@angular/router';


export interface User {
  name: string;
}
export interface Time {
  name: any;
  
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
  urllink:string ="assets/images/food-example.png"
  receptAddForm!: FormGroup;
  imgFile!: string;
  recepty: Recepty[] = [];
  fotka: HlavniFotka[] = [];
  error = '';
  success = '';
  load = false;
  isLinear = false;
  formGroup!: FormGroup;
  form!: FormArray;
  postup!: any;
  img: Img[] = [];
  uploaded = false;
  uploadMessage = false;
  
  
  //postup: FormArray | any[] | undefined;

  //currentStep = 0;

  constructor(private http: HttpClient, private router: Router, private _formBuilder: FormBuilder, private receptyService: ReceptyService, public dialog: MatDialog, private _location: Location) { }

  myControl = new FormControl();
  options: User[] = [{name: "0"}, {name: '1'},{name: '2'},{name: '3'},{name: '4'},{name: '5'},{name: '6'},{name: '7'},{name: '8'},{name: '9'}, {name: '10'},{name: '15'},{name: '20'},{name: '25'},{name: '30'},{name: '35'},{name: '40'},{name: '45'},{name: '50'},{name: '55'},{name: '60'},];
  time: Time[] = [{name: '10'},
                  {name: '20'},                
                  {name: '30'},                 
                  {name: '40'},                 
                  {name: '50'},
                  {name: '60'},
                   {name: '70'},
                   {name: '80'},
                   {name: '90'},
                   {name: '100'},
                   {name: '110'},
                   {name: '120'},
                   {name: '130'},
                   {name: '140'},
                   {name: '150'},
                   {name: '160'},
                   {name: '170'},
                   {name: '180'},
                   {name: '190'},
                   {name: '200'},];

  filteredOptions: Observable<User[]> | undefined;
  filteredOptionsTime!: Observable<Time[]> ;

  ngOnInit(): void {
    this.getRecepty();
    this.receptAddForm = this._formBuilder.group({
      'zakladniUdaje': new FormGroup({
        'nazev': new FormControl("", [Validators.required, Validators.maxLength(50),]),
        'autor': new FormControl("", [Validators.required, Validators.maxLength(25),]),
        'obrazek': new FormControl(""),
        'imageData': new FormControl(""),
        'suroviny': new FormControl("", [Validators.required, Validators.maxLength(1800),]),
        'note': new FormControl("", [Validators.minLength(70),Validators.maxLength(700), Validators.required ]),
        'skill': new FormControl("", Validators.required), 
        'cas_pripravy': new FormControl("", [Validators.required, Validators.maxLength(3)]),        
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
    this.filteredOptionsTime = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'number' ? value : value.name)),
      map(name => (name ? this._filterTime(name) : this.time.slice())),
      
    );
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
}

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  displayFnTime(time: Time): string {
    return time && time.name ? time.name : '';
  }
  private _filterTime(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  

 initPostup(){
    return this._formBuilder.group({
        nazev: new FormControl("", [Validators.required, Validators.maxLength(50),]),
        cas: new FormControl("", Validators.required),
        obrazek: new FormControl(""),
        postup: new FormControl("", [Validators.required, Validators.maxLength(1800),])
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

loadingSpinner(){
  this.load = true;
  this.delay(3000).then(any=>{
    if(this.uploaded = true){
      this.uploadMessage = true;
      this.delay(1000).then(any=>{
        this.load = false;
        this.uploadMessage = false;
        this.receptAddForm.reset();
        this.router.navigate(['']);
        window.location.reload();
      });
    }
    
  });
  
}

openPravidlaVytvoritReceptDialog() {
  this.dialog.open(PravidlaVytvoreniReceptuDialog);
}

addRecept(receptAddForm: FormGroup) {
  this.resetAlerts();
  this.loadingSpinner(); 
  


   
  this.load = true;
//console.log("SEND " + JSON.stringify(receptAddForm.value));
  this.receptyService.store(receptAddForm.value).subscribe(
    
    (res: Recepty) => {
      // Update the list of cars
      this.recepty.push(res)
      //console.log("SENT " + JSON.stringify(receptAddForm.value));
      // Inform the user
      this.success = 'Created successfully';
      this.uploaded = true;
 
      // Reset the form
      
    },
    (err) => (this.error = err.message)
  );
}


selectFile(event:any){
  
  if(event.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e:any)=>{
      this.urllink = e.target.result
    }
  }
  
}
onSelectedFile(event:any){
  console.log(event.target.files.length);
  if(event.target.files.length > 0){
    
    var file:File = event.target.files[0];
    console.log( file);
    this.receptAddForm.get('zakladniUdaje.obrazek')!.setValue(file.name);
   // this.receptAddForm.get('zakladniUdaje.imageData')!.setValue(file);

  }
  
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
  lastPage() {
    this._location.back();
  }
/* file upload */


 
  onImageChange(e:any) {
    const reader = new FileReader();
    
    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);
      
      reader.onload = () => {
        this.imgFile = reader.result as string;
        (this.receptAddForm.get('zakladniUdaje.imageData') as FormGroup).patchValue({
          name: "DATA",
          file: "DATA",
          imgSrc: reader.result
        })
      };
      
      this.delay(500).then(any=>{
       this.upload();
      });
    }
  }
  get uf(){
  return (this.receptAddForm.get('zakladniUdaje.imageData') as FormGroup).controls;
}
upload(){
  
    console.log((this.receptAddForm.get('zakladniUdaje.imageData') as FormGroup).value);
    this.http.post('http://kucharkaprotloustiky.rf.gd/api/recepty/file-upload.php', (this.receptAddForm.get('zakladniUdaje.imageData') as FormGroup).value)
      .subscribe(
        response  => {
          (this.receptAddForm.get('zakladniUdaje.obrazek') as FormGroup).patchValue(response);

      })
  }

}

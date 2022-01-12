import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Recepty } from './interface';
import { HodnoceniDialog, InteraktivniPostupDialog, PravidlaVytvoreniReceptuDialog, VytvoreniReceptuDialog, OnasDialog, VznikWebuDialog } from './main-page/recept-card/recept-card.component';
import { ReceptyService } from './service/recepty.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Super kuchařka';

  vyhledat!: FormGroup;
  recepty: Recepty[] = [];
  error = '';
  success = '';
        
  constructor(private receptyService: ReceptyService,public dialog: MatDialog, private _formBuilder: FormBuilder, private router: Router) {
  }
        
  ngOnInit() {
    this.vyhledat = this._formBuilder.group({
      'search': [""],
          
    });
  }

  filtrVyhledat(data:any){
    if(data.value.search){
      var values = JSON.stringify(data.value);
    console.log(values);
    
    this.router.navigate(['/hledat', values]);
    this.delay(10).then(any=>{
      
      window.location.reload();
    });
  }}
        
 openDialogHodnoceni() {
  this.dialog.open(HodnoceniDialog);
}
openVytvoritReceptDialog() {
  this.dialog.open(VytvoreniReceptuDialog);
}

openInteraktivniReceptDialog() {
  this.dialog.open(InteraktivniPostupDialog);
}

openPravidlaVytvoritReceptDialog() {
  this.dialog.open(PravidlaVytvoreniReceptuDialog);
}
openOnasDialog() {
  this.dialog.open(OnasDialog);
}
openVznikWebuDialog() {
  this.dialog.open(VznikWebuDialog);
}
 
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
  }
}


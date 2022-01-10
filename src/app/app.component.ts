import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Recepty } from './interface';
import { HodnoceniDialog, InteraktivniPostupDialog, PravidlaVytvoreniReceptuDialog, VytvoreniReceptuDialog } from './main-page/recept-card/recept-card.component';
import { ReceptyService } from './service/recepty.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Super kuchařka';

  recepty: Recepty[] = [];
  error = '';
  success = '';
        
  constructor(private receptyService: ReceptyService,public dialog: MatDialog) {
  }
        
  ngOnInit() {

  }
        
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
 
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}


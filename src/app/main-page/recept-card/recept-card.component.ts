import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recepty } from '../../interface';
import { ReceptyService } from '../../service/recepty.service';

@Component({
  selector: 'app-recept-card',
  templateUrl: './recept-card.component.html',
  styleUrls: ['./recept-card.component.scss']
})
export class ReceptCardComponent implements OnInit {
  title = 'Super-kucharka';

  recepty: Recepty[] = [];
  error = '';
  success = '';
        
  constructor(private receptyService: ReceptyService, public dialog: MatDialog) {
  }
        
  ngOnInit() {
    this.getRecepty();
  }
        
  getRecepty(): void {
    this.receptyService.getAll().subscribe(
      (data: Recepty[]) => {
        this.recepty = data;
        this.success = 'successful retrieval of the list';
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
  openDialog() {
    this.dialog.open(HodnoceniDialog);
  }
}

@Component({
  selector: 'hodnoceni-dialog',
  templateUrl: 'hodnoceni-dialog.html',
})
export class HodnoceniDialog {}


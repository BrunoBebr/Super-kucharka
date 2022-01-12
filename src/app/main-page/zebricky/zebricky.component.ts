import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Recepty } from 'src/app/interface';
import { ReceptyService } from '../../service/recepty.service';
import { HodnoceniDialog } from '../recept-card/recept-card.component';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-zebricky',
  templateUrl: './zebricky.component.html',
  styleUrls: ['./zebricky.component.scss']
})
export class ZebrickyComponent implements OnInit {
  params:any;
  public skill?: string;

  hodnHigh: Recepty[] = [];
  receptyHodnoceniLow: Recepty[] = [];
  receptyNew: Recepty[] = [];
  receptyShortest: Recepty[] = [];
  receptyLongest: Recepty[] = [];

  error = '';
  success = '';
  load = false;
  uploaded = false;
  uploadMessage= false;  constructor(private receptyService: ReceptyService, public dialog: MatDialog, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getZebrickyReceptyHodnoceniHigh("hodnocenihigh");
    this.getZebrickyReceptyHodnoceniLow("hodnocenilow");
    this.getZebrickyReceptyNew("date");
    this.getZebrickyReceptyShortest("timelow");
    this.getZebrickyReceptyLongest("timehigh");
  }


  getZebrickyReceptyHodnoceniHigh(params:any): void {
    this.receptyService.getZebricky(params).subscribe(
      (data: Recepty[]) => {
        this.hodnHigh = data;
        this.success = 'successful retrieval of the list';
        this.uploaded = true;
        console.log(this.hodnHigh)

      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
  getZebrickyReceptyHodnoceniLow(params:any): void {
    this.receptyService.getZebricky(params).subscribe(
      (data: Recepty[]) => {
        this.receptyHodnoceniLow = data;
        this.success = 'successful retrieval of the list';
        this.uploaded = true;


      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
  getZebrickyReceptyNew(params:any): void {
    this.receptyService.getZebricky(params).subscribe(
      (data: Recepty[]) => {
        this.receptyNew = data;
        this.success = 'successful retrieval of the list';
        this.uploaded = true;


      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
  getZebrickyReceptyShortest(params:any): void {
    this.receptyService.getZebricky(params).subscribe(
      (data: Recepty[]) => {
        this.receptyShortest = data;
        this.success = 'successful retrieval of the list';
        this.uploaded = true;


      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
  getZebrickyReceptyLongest(params:any): void {
    this.receptyService.getZebricky(params).subscribe(
      (data: Recepty[]) => {
        this.receptyLongest = data;
        this.success = 'successful retrieval of the list';
        this.uploaded = true;


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

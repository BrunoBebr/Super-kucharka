import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Recepty } from '../../interface';
import { ReceptyService } from '../../service/recepty.service';
import {MatTableDataSource} from '@angular/material/table'
import { Observable } from 'rxjs';
import {Location} from '@angular/common';


@Component({
  selector: 'app-recept-card',
  templateUrl: './recept-card.component.html',
  styleUrls: ['./recept-card.component.scss']
})


export class ReceptCardComponent implements OnInit,OnDestroy {
  
  title = 'Super-kucharka';

  params:any;
  public skill?: string;
  recepty: Recepty[] = [];
  error = '';
  success = '';
  load = false;
  uploaded = false;
  uploadMessage= false;

  hodnoceni= "";
  cas_pripravy="";
  obtiznost="";
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<Recepty> | undefined;


  
        
  constructor(private receptyService: ReceptyService, private _location: Location, public dialog: MatDialog, private activatedRoute: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) {
  }
        
  async ngOnInit():Promise<void> {

    

    this.params=this.activatedRoute.snapshot.paramMap.get("params");
    if(this.params){
      var values = JSON.parse(this.params);

      if(values.skill || values.cas_pripravy|| values.hodnoceni){
        this.obtiznost = values.skill;
        this.cas_pripravy = values.cas_pripravy;
        this.hodnoceni = values.hodnoceni;
        console.log(this.params);
        this.getFilteredRecepty(this.params);
    }}else{
        this.getRecepty();

        this.load = true;
          if(this.uploaded = true){
            

            

            this.uploadMessage = true;
            this.delay(300).then(any=>{
              this.load = false;
              this.uploadMessage = false;
              
            });
    }

    
      }
     /* this.activatedRoute.params.subscribe(paramsId => {
        this.skill = paramsId.skill;
      });*/
      
    
    
  }
   
    
        
  getRecepty(): void {
    this.receptyService.getAll().subscribe(
      (data: Recepty[]) => {
        this.recepty = data;
        this.success = 'successful retrieval of the list';
        this.uploaded = true;
        this.dataSource = new MatTableDataSource<Recepty>(data);

        this.changeDetectorRef.detectChanges();
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();

      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
  getFilteredRecepty(params:any): void {
    this.receptyService.getFiltr(params).subscribe(
      (data: Recepty[]) => {
        this.recepty = data;
        this.success = 'successful retrieval of the list';
        this.uploaded = true;

        this.dataSource = new MatTableDataSource<Recepty>(data);

        this.changeDetectorRef.detectChanges();
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();

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
  openVytvoritReceptDialog() {
    this.dialog.open(VytvoreniReceptuDialog);
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
}

  loadingSpinner(){
    
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
  lastPage() {
    this._location.back();
  }

}

@Component({
  selector: 'hodnoceni-dialog',
  templateUrl: '../../dialogs/hodnoceni-dialog.html',
  
})
export class HodnoceniDialog {}


@Component({
  selector: 'vytvoreni-receptu-dialog',
  templateUrl: '../../dialogs/vytvoreni-receptu-dialog.html',
  
})
export class VytvoreniReceptuDialog {}

@Component({
  selector: 'pravidla-vytvoreni-receptu-dialog',
  templateUrl: '../../dialogs/pravidla-vytvoreni-receptu.html',
  
})
export class PravidlaVytvoreniReceptuDialog {}


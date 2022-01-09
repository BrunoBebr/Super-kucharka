import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Recepty } from '../../interface';
import { ReceptyService } from '../../service/recepty.service';

@Component({
  selector: 'app-recept-card',
  templateUrl: './recept-card.component.html',
  styleUrls: ['./recept-card.component.scss']
})
export class ReceptCardComponent implements OnInit {
  title = 'Super-kucharka';


  public skill?: string;
  recepty: Recepty[] = [];
  error = '';
  success = '';
  load = false;
  uploaded = false;
  uploadMessage= false;
        
  constructor(private receptyService: ReceptyService, public dialog: MatDialog, private activatedRoute: ActivatedRoute) {
  }
        
  async ngOnInit():Promise<void> {
    this.getRecepty();

    this.load = true;
      if(this.uploaded = true){
        this.uploadMessage = true;
        this.delay(300).then(any=>{
          this.load = false;
          this.uploadMessage = false;
          
        });
      }
      this.activatedRoute.params.subscribe(paramsId => {
        this.skill = paramsId.skill;
      });
      
    
    
  }
   
    
        
  getRecepty(): void {
    this.receptyService.getAll().subscribe(
      (data: Recepty[]) => {
        this.recepty = data;
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

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then();
}

  loadingSpinner(){
    
  }
}

@Component({
  selector: 'hodnoceni-dialog',
  templateUrl: 'hodnoceni-dialog.html',
})
export class HodnoceniDialog {}


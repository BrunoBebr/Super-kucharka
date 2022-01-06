import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recepty } from '../interface';
import { ReceptyService } from '../service/recepty.service';

@Component({
  selector: 'app-recept-detail',
  templateUrl: './recept-detail.component.html',
  styleUrls: ['./recept-detail.component.scss']
})
export class ReceptDetailComponent implements OnInit {
  public id?: string;


  constructor(private activatedRoute: ActivatedRoute, private receptyService: ReceptyService) { 
  }

  recepty: Recepty[] = [];
  error = '';
  success = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
      
  });
  console.log(this.id);
  this.getReceptId(this.id)
  }
  getReceptId(id : any): void {
    this.receptyService.getSpecific(id).subscribe(
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
}

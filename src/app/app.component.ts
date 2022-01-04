import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recepty } from './interface';
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
        
  constructor(private receptyService: ReceptyService) {
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
 
  
}

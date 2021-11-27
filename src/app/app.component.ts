import { Component, OnInit } from '@angular/core';
import { Recepty } from './interface';
import { ReceptyService } from './recepty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Super-kucharka';

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

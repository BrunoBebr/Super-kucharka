import { Component, OnInit } from '@angular/core';
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

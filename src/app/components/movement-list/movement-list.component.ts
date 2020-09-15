import {Component, OnInit} from '@angular/core';
import {movements} from '../../movements';
import {Movement} from '../../models/movement.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {
  http: HttpClient;
  loading: boolean;
  movements: Array<Movement>;

  constructor(http: HttpClient) {
    this.http = http;
    this.loading = true;

    this.http.get(environment.apiUrl + '/api/movements', {headers: {Authorization: 'Bearer ' + environment.apiKey}})
      .subscribe(data => {
        this.movements = data['hydra:member'];
        this.loading = false;
      });
  }

  ngOnInit(): void {
  }

  sortedMovements(): Array<Movement> {
    return this.movements.sort((a: Movement, b: Movement) => b.date.getTime() - a.date.getTime());
  }

  movementWasSelected(movement: Movement) {
    console.log('Movement clicked', movement);
  }
}

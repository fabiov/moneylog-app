import {Component, OnInit} from '@angular/core';
import {MovementService} from '../../shared/services/movement.service';
import {Movement} from '../../models/movement.model';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {
  private movementService: MovementService;
  private loading: boolean;
  private movements: Array<Movement>;

  constructor(movementService: MovementService) {
    this.movementService = movementService;
    this.loading = true;

    this.movementService.fetchList().subscribe(data => {
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

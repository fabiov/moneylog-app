import { Component, OnInit } from '@angular/core';
import { movements } from '../../movements';
import { Movement } from '../../models/movement.model';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {
  movements: Array<Movement>;

  constructor() {
    this.movements = [];
    for (const item of movements) {
      this.movements.push(new Movement(item.id, item.amount, item.description, item.date));
    }
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

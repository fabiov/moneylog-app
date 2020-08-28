import { Component, OnInit } from '@angular/core';
import { movements } from '../movements';
import { Movement } from '../models/movement.model';

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

  addMovement(date: HTMLInputElement, description: HTMLInputElement, amount: HTMLInputElement) {
    console.log(`Addinig movements date: ${date.value}, description: ${description.value} amd amount: ${amount.value}`);

    this.movements.push(new Movement(movements.length + 1, parseFloat(amount.value), description.value, new Date(date.value)));

    amount.value      = '';
    date.value        = '';
    description.value = '';

    return false;
  }

  sortedMovements(): Array<Movement> {
    return this.movements.sort((a: Movement, b: Movement) => b.date.getTime() - a.date.getTime());
  }

  movementWasSelected(movement: Movement) {
    console.log('Movement clicked', movement);
  }
}

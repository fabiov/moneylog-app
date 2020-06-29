import { Component, OnInit } from '@angular/core';
import { movements } from '../movements';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {
  movements = movements;

  constructor() {
  }

  ngOnInit(): void {
  }

}
